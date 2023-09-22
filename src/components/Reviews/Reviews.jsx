import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMovieDetails } from 'components/services/api';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import { Loader } from 'components/Loader/Loader';
import { List, ListItem, NoReviewText } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();

    async function getMovieReviews() {
      try {
        const data = await fetchMovieDetails(movieId, '/reviews', controller);
        const reviews = [...data.results].sort(
          (a, b) => b.author_details.rating - a.author_details.rating
        );

        setMovieReviews(reviews);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.remove();
          toast.error('Oops, something went wrong. Try reloading the page.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    getMovieReviews();

    return () => {
      controller.abort();
      toast.remove();
    };
  }, [movieId]);

  return (
    <div>
      {movieReviews.length > 0 ? (
        <List>
          {movieReviews.map(review => (
            <ListItem key={review.id}>
              <ReviewsItem review={review} />
            </ListItem>
          ))}
        </List>
      ) : (
        <NoReviewText>We don't have any reviews for this movie.</NoReviewText>
      )}

      {isLoading && <Loader text="Loading data, please wait..." />}
    </div>
  );
};

export default Reviews;
