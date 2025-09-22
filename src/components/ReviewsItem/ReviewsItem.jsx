import PropTypes from 'prop-types';
import { HiLink } from 'react-icons/hi';
import { stripHTML } from 'helpers/helpers';
import {
  Avatar,
  AvatarWrapper,
  Descr,
  DescrItem,
  Name,
  ReviewLink,
  Wrapper,
} from './ReviewsItem.styled';

const AVATARS_BASE_URL = 'https://image.tmdb.org/t/p/';

export const ReviewsItem = ({ review }) => {
  if (!review) return;

  const { author, content, created_at = '', url, author_details } = review;
  const { rating, avatar_path } = author_details;
  const date = new Date(created_at);
  const createdDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Wrapper>
        <AvatarWrapper>
          {avatar_path ? (
            <Avatar
              src={`${AVATARS_BASE_URL}w45/${avatar_path}`}
              alt="Author's avatar"
              width={32}
              height={32}
            />
          ) : (
            <>{author.charAt(0).toUpperCase()}</>
          )}
        </AvatarWrapper>

        {author && <Name>{author}</Name>}
      </Wrapper>

      <Descr>
        Author rating: <DescrItem>{rating || 0}</DescrItem>
      </Descr>

      {createdDate !== 'Invalid Date' && <Descr>{createdDate}</Descr>}

      {content && <Descr>{stripHTML(content)}</Descr>}

      {url && (
        <ReviewLink href={url} target="_blank" rel="noopener noreferrer">
          <HiLink /> Link to review
        </ReviewLink>
      )}
    </>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.object.isRequired,
};
