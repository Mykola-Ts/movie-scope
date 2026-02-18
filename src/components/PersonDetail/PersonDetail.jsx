import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import photoPlaceholder from '../../img/avatar-placeholder.jpg';
import { getPersonPhotos } from 'services/persons';
import { configurationImages, defaultErrorMessage } from 'helpers/helpers';
import {
  Biography,
  BiographyText,
  Name,
  Photo,
  PhotosList,
  Wrapper,
} from './PersonDetail.styled';

export const PersonDetail = ({ person }) => {
  const [photos, setPhotos] = useState([]);

  const { id, name = '', biography = '', profile_path = '' } = person;
  const { baseUrl, profileSize } = configurationImages;
  const posterSrc = profile_path
    ? `${baseUrl}/w${profileSize}/${profile_path}`
    : photoPlaceholder;

  useEffect(() => {
    if (!id) {
      toast.remove();
      toast.error(defaultErrorMessage);

      return;
    }

    const controller = new AbortController();

    getPersonPhotos(id, setPhotos, controller);

    return () => {
      controller.abort();
      toast.remove();
    };
  }, [id]);

  return (
    <div>
      <Name> {name}</Name>

      <Wrapper>
        <Photo
          src={posterSrc}
          alt={name}
          width={profileSize}
          height={profileSize * 1.5}
        />
      </Wrapper>

      {biography && (
        <Biography>
          <p>Biography</p>
          <BiographyText>{biography}</BiographyText>
        </Biography>
      )}

      {photos.length > 0 && (
        <PhotosList>
          {photos.map(({ file_path }) => (
            <li key={file_path}>
              <Photo
                src={`${baseUrl}/w${profileSize}/${file_path}`}
                alt={name}
                width={profileSize}
                height={profileSize * 1.5}
                loading="lazy"
              />
            </li>
          ))}
        </PhotosList>
      )}
    </div>
  );
};

PersonDetail.propTypes = {
  person: PropTypes.object.isRequired,
};
