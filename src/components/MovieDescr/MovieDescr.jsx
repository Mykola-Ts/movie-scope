import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import posterPlaceholder from '../../img/poster-placeholder.jpg';
import { configurationImages } from 'helpers/helpers';
import {
  ListItem,
  DescrValue,
  Details,
  Wrapper,
  Poster,
  Title,
  List,
  MovieLink,
  Overview,
  ListValues,
} from './MovieDescr.styled';

export const MovieDescr = ({ movieDetails }) => {
  if (!movieDetails) return;

  const {
    title = '',
    overview = '',
    poster_path = '',
    original_title = '',
    genres = [],
    adult = false,
    original_language = '',
    homepage = '',
    production_countries = [],
    production_companies = [],
    release_date,
    runtime = '',
    budget = '',
    revenue = '',
    popularity = 0,
    vote_average = 0,
    vote_count = 0,
  } = movieDetails;
  const { baseUrl, posterSize } = configurationImages;
  const date = new Date(release_date);
  const releaseDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const releaseYear = date.getFullYear() || null;
  const posterSrc = poster_path
    ? `${baseUrl}/w${posterSize}/${poster_path}`
    : posterPlaceholder;
  const moviePopularity = popularity.toFixed(1);
  const voteAverage = vote_average.toFixed(1);

  return (
    <Details>
      <Title>
        {title} {releaseYear && <span>({releaseYear})</span>}
      </Title>

      <Wrapper>
        <Poster src={posterSrc} alt="Poster" width={posterSize} height={513} />

        <List>
          <ListItem>
            {homepage && (
              <MovieLink
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage Movie <FiExternalLink />
              </MovieLink>
            )}
          </ListItem>

          <ListItem>
            Original title: <DescrValue>{original_title}</DescrValue>
          </ListItem>

          {genres.length > 0 && (
            <ListItem>
              <p>Genres:</p>
              <ListValues>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ListValues>
            </ListItem>
          )}

          {runtime > 0 && (
            <ListItem>
              Runtime: <DescrValue>{runtime} minutes</DescrValue>
            </ListItem>
          )}

          {adult && (
            <ListItem>
              Adult: <DescrValue>18+</DescrValue>
            </ListItem>
          )}

          <ListItem>
            Original language: <DescrValue>{original_language}</DescrValue>
          </ListItem>

          {releaseDate !== 'Invalid Date' && (
            <ListItem>
              Release date: <DescrValue>{releaseDate}</DescrValue>
            </ListItem>
          )}

          {production_countries.length > 0 && (
            <ListItem>
              <p>Production countries:</p>
              <ListValues>
                {production_countries.map(({ iso_3166_1, name }) => (
                  <li key={iso_3166_1}>{name}</li>
                ))}
              </ListValues>
            </ListItem>
          )}

          {production_companies.length > 0 && (
            <ListItem>
              <p>Production companies:</p>
              <ListValues>
                {production_companies.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ListValues>
            </ListItem>
          )}

          {budget > 0 && (
            <ListItem>
              Budget: <DescrValue>${budget}</DescrValue>
            </ListItem>
          )}

          {revenue > 0 && (
            <ListItem>
              Revenue: <DescrValue>${revenue}</DescrValue>
            </ListItem>
          )}

          <ListItem>
            Popularity: <DescrValue>{moviePopularity}</DescrValue>
          </ListItem>

          <ListItem>
            Vote average: <DescrValue>{voteAverage}</DescrValue>
          </ListItem>

          <ListItem>
            Vote count: <DescrValue>{vote_count}</DescrValue>
          </ListItem>

          <ListItem>
            <Rating
              readonly={true}
              stop={10}
              initialRating={vote_average}
              emptySymbol={
                <AiOutlineStar color="var(--gold-color)" size={32} />
              }
              fullSymbol={<AiTwotoneStar color="var(--gold-color)" size={32} />}
            />
          </ListItem>
        </List>
      </Wrapper>

      {overview && (
        <Overview>
          <p>Overview</p>
          <DescrValue>{overview}</DescrValue>
        </Overview>
      )}
    </Details>
  );
};

MovieDescr.propTypes = {
  movieDetails: PropTypes.object.isRequired,
};
