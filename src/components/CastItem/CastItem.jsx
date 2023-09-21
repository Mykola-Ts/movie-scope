import PropTypes from 'prop-types';
import photoPlaceholder from '../../img/avatar-placeholder.jpg';
import {
  Descr,
  DescrItem,
  DescrItemValue,
  Name,
  Photo,
} from './CastItem.styled';

export const CastItem = ({ castItem = {}, configurationImages = {} }) => {
  const {
    name = '',
    character = '',
    popularity = 0,
    profile_path = '',
  } = castItem;
  const { baseUrl = '', profileSizes = [] } = configurationImages;
  const profileSize = profileSizes[1];
  const posterSrc = profile_path
    ? `${baseUrl}/${profileSize}/${profile_path}`
    : photoPlaceholder;
  const popularityItem = popularity.toFixed(1);

  return (
    <>
      <Photo src={posterSrc} alt={name} width={profileSize} height={177} />

      <Descr>
        <Name>{name}</Name>
        <DescrItem>
          Character: <DescrItemValue>{character}</DescrItemValue>
        </DescrItem>
        <DescrItem>
          Popularity: <DescrItemValue>{popularityItem}</DescrItemValue>
        </DescrItem>
      </Descr>
    </>
  );
};

CastItem.propTypes = {
  castItem: PropTypes.object.isRequired,
  configurationImages: PropTypes.object.isRequired,
};
