import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getReviewsMovieById } from 'services/movies';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import { Loader } from 'components/Loader/Loader';
import { List, ListItem, NoReviewText } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const controller = new AbortController();

    getReviewsMovieById(movieId, setMovieReviews, setIsLoading, controller);

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
        <NoReviewText>No reviews available for this movie.</NoReviewText>
      )}

      <Loader isLoading={isLoading} />
    </div>
  );
};

export default Reviews;
