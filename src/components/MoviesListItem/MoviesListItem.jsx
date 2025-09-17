import PropTypes from 'prop-types';
import Rating from 'react-rating';
import posterPlaceholder from '../../img/poster-placeholder.jpg';
import { configurationImages } from 'helpers/helpers';
import {
  Adult,
  Descr,
  DescrWrapper,
  DescrYear,
  OutlineStar,
  Poster,
  Title,
  TwotoneStar,
} from './MoviesListItem.styled';

export const MoviesListItem = ({ movie }) => {
  if (!movie) return;

  const { baseUrl, posterSize } = configurationImages;
  const {
    title = '',
    release_date,
    adult = false,
    poster_path,
    vote_average = 0,
  } = movie;
  const posterSrc = poster_path
    ? `${baseUrl}/w${posterSize}/${poster_path}`
    : posterPlaceholder;
  const releaseDate = new Date(release_date);
  const releaseYear = releaseDate.getFullYear() || null;

  return (
    <>
      <Poster
        src={posterSrc}
        alt={`Poster for the movie ${title}`}
        width={posterSize}
        height={posterSize * 1.5}
      />

      <Descr>
        {title && <Title>{title} </Title>}

        <DescrWrapper>
          <Rating
            readonly={true}
            stop={10}
            step={2}
            initialRating={vote_average}
            emptySymbol={<OutlineStar color="var(--gold-color)" />}
            fullSymbol={<TwotoneStar color="var(--gold-color)" />}
          />

          {releaseYear && <DescrYear>{releaseYear}</DescrYear>}
        </DescrWrapper>
      </Descr>

      {adult && <Adult>18+</Adult>}
    </>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
