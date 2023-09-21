import PropTypes from 'prop-types';
import Rating from 'react-rating';
import posterPlaceholder from '../../img/poster-placeholder.jpg';
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

export const MoviesListItem = ({ movies = {}, configurationImages = {} }) => {
  const { baseUrl, posterSizes } = configurationImages;
  const { title, release_date, adult, poster_path, vote_average } = movies;
  const posterSize = posterSizes[3];
  const posterSrc = poster_path
    ? `${baseUrl}/${posterSize}/${poster_path}`
    : posterPlaceholder;
  const releaseDate = new Date(release_date);
  const releaseYear = releaseDate.getFullYear() || null;

  return (
    <>
      <Poster
        src={posterSrc}
        alt={`Poster for the movie ${title}`}
        width={posterSize}
        height={513}
      />

      <Descr>
        <Title>{title} </Title>

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
  movies: PropTypes.object.isRequired,
  state: PropTypes.object,
};
