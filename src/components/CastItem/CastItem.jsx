import PropTypes from 'prop-types';
import photoPlaceholder from '../../img/avatar-placeholder.jpg';
import { configurationImages } from 'helpers/helpers';
import {
  Descr,
  DescrItem,
  DescrItemValue,
  Name,
  Photo,
} from './CastItem.styled';

export const CastItem = ({ castItem }) => {
  if (!castItem) return;

  const {
    name = '',
    character = '',
    popularity = 0,
    profile_path = '',
  } = castItem;
  const { baseUrl, profileSize } = configurationImages;
  const posterSrc = profile_path
    ? `${baseUrl}/w${profileSize}/${profile_path}`
    : photoPlaceholder;
  const popularityItem = popularity.toFixed(1);

  return (
    <>
      <Photo
        src={posterSrc}
        alt={name}
        width={profileSize}
        height={profileSize * 1.5}
      />

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
};
