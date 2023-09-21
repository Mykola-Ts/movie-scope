import PropTypes from 'prop-types';
import { HiLink } from 'react-icons/hi';
import { Descr, DescrItem, Name, ReviewLink } from './ReviewsItem.styled';

export const ReviewsItem = ({ review = {} }) => {
  const { author, content, created_at, url, author_details } = review;
  const { rating } = author_details;
  const date = new Date(created_at);
  const createdDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Name>{author}</Name>
      <Descr>
        Rating: <DescrItem>{rating || 0}</DescrItem>
      </Descr>
      <Descr>{createdDate}</Descr>
      <Descr>{content}</Descr>
      <ReviewLink href={url} target="_blank" rel="noopener noreferrer">
        <HiLink /> Link to review
      </ReviewLink>
    </>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.object.isRequired,
};
