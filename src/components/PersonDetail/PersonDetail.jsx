import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import photoPlaceholder from '../../img/avatar-placeholder.jpg';
import { getPersonPhotos } from 'services/persons';
import {
  configurationImages,
  defaultErrorMessage,
  formatDate,
  GENDERS,
} from 'helpers/helpers';
import {
  Biography,
  BiographyText,
  Details,
  DetailsList,
  DetailsListItem,
  DetailsSubTitle,
  DetailsValue,
  Name,
  Photo,
  PhotosList,
  PhotosListItem,
  Wrapper,
} from './PersonDetail.styled';

export const PersonDetail = ({ person }) => {
  const [photos, setPhotos] = useState([]);

  const {
    id,
    name,
    biography,
    profile_path,
    gender = GENDERS[0],
    birthday,
    place_of_birth,
    popularity = '0',
    known_for_department,
  } = person;
  const { baseUrl, profileSize } = configurationImages;
  const posterSrc = profile_path
    ? `${baseUrl}/w${profileSize}/${profile_path}`
    : photoPlaceholder;
  const birthdayDate = birthday ? formatDate(birthday) : '';
  const fixedPopularity = Number(popularity).toFixed(1);

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
    <Details>
      <Name> {name}</Name>

      <Wrapper>
        <Photo
          src={posterSrc}
          alt={name}
          width={profileSize}
          height={profileSize * 1.5}
        />

        <DetailsList>
          <DetailsListItem>
            Gender:
            <DetailsValue>{GENDERS[gender]}</DetailsValue>
          </DetailsListItem>

          {birthday && (
            <DetailsListItem>
              Birthday:
              <DetailsValue>{birthdayDate}</DetailsValue>
            </DetailsListItem>
          )}

          {place_of_birth && (
            <DetailsListItem>
              Place of birth:
              <DetailsValue>{place_of_birth}</DetailsValue>
            </DetailsListItem>
          )}

          {known_for_department && (
            <DetailsListItem>
              Known for department:
              <DetailsValue>{known_for_department}</DetailsValue>
            </DetailsListItem>
          )}

          <DetailsListItem>
            Popularity:
            <DetailsValue>{fixedPopularity}</DetailsValue>
          </DetailsListItem>
        </DetailsList>
      </Wrapper>

      {biography && (
        <Biography>
          <p>Biography</p>
          <BiographyText>{biography}</BiographyText>
        </Biography>
      )}

      {photos.length > 1 && (
        <>
          <DetailsSubTitle>Photos</DetailsSubTitle>

          <PhotosList>
            {photos.map(({ file_path }) => (
              <PhotosListItem key={file_path}>
                <Photo
                  src={`${baseUrl}/w${profileSize}/${file_path}`}
                  alt={name}
                  loading="lazy"
                  className="gallery"
                />
              </PhotosListItem>
            ))}
          </PhotosList>
        </>
      )}
    </Details>
  );
};

PersonDetail.propTypes = {
  person: PropTypes.object.isRequired,
};
