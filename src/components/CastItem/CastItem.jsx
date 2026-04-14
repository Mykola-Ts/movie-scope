import PropTypes from 'prop-types';
import photoPlaceholder from '../../img/avatar-placeholder.jpg';
import { configurationImages } from 'helpers/helpers';
import {
  Descr,
  DescrItem,
  DescrItemValue,
  Name,
  Photo,
  StyledLink,
} from './CastItem.styled';
import { useLocation } from 'react-router-dom';

export const CastItem = ({ castItem, state }) => {
  const location = useLocation();

  if (!castItem) return;

  const {
    name = '',
    character = '',
    popularity = 0,
    profile_path = '',
    id = '',
  } = castItem;
  const { baseUrl, profileSize } = configurationImages;
  const posterSrc = profile_path
    ? `${baseUrl}/w${profileSize}/${profile_path}`
    : photoPlaceholder;
  const popularityItem = popularity.toFixed(1);

  return (
    <>
      <StyledLink
        to={`/person/${id}`}
        state={{
          from: {
            pathname: location?.pathname || '/',
            search: location?.search || '',
          },
          parent: location?.state?.from ?? location,
        }}
        className="photo"
      >
        <Photo
          src={posterSrc}
          alt={name}
          width={profileSize}
          height={profileSize * 1.5}
        />
      </StyledLink>

      <Descr>
        <StyledLink
          to={`/person/${id}`}
          state={{
            from: {
              pathname: location?.pathname || '/',
              search: location?.search || '',
            },
            parent: location?.state?.from ?? location,
          }}
        >
          <Name>{name}</Name>
        </StyledLink>

        {character && (
          <DescrItem>
            Character: <DescrItemValue>{character}</DescrItemValue>
          </DescrItem>
        )}

        <DescrItem>
          Popularity: <DescrItemValue>{popularityItem}</DescrItemValue>
        </DescrItem>
      </Descr>
    </>
  );
};

CastItem.propTypes = {
  castItem: PropTypes.object.isRequired,
  state: PropTypes.object,
};
