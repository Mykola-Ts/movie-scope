import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { HiLink } from 'react-icons/hi';
import { checkClamping, stripHTML } from 'helpers/helpers';
import {
  Avatar,
  AvatarWrapper,
  ClambToggleBtn,
  Descr,
  DescrItem,
  DescrContentWrap,
  Name,
  ReviewLink,
  Wrapper,
  DescrMetaWrap,
} from './ReviewsItem.styled';

const AVATARS_BASE_URL = 'https://image.tmdb.org/t/p/';
const qtyLineClamped = 10;

export const ReviewsItem = ({ review }) => {
  const [isClamped, setIsClamped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const reviewDescrRef = useRef(null);

  useEffect(() => {
    const checkClampingReview = () => {
      checkClamping(
        reviewDescrRef,
        qtyLineClamped,
        setIsExpanded,
        setIsClamped
      );
    };

    checkClampingReview();

    window.addEventListener('resize', checkClampingReview);

    return () => window.removeEventListener('resize', checkClampingReview);
  }, []);

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

      <DescrMetaWrap>
        <Descr>
          Author rating: <DescrItem>{rating || 0}</DescrItem>
        </Descr>

        {createdDate !== 'Invalid Date' && <Descr>{createdDate}</Descr>}
      </DescrMetaWrap>

      {content && (
        <DescrContentWrap>
          <Descr
            $lines={isExpanded ? 'none' : qtyLineClamped}
            ref={reviewDescrRef}
          >
            {stripHTML(content)}
          </Descr>

          {isClamped && (
            <ClambToggleBtn
              type="button"
              onClick={() => setIsExpanded(!isExpanded ? true : false)}
            >
              {!isExpanded ? 'Show more' : 'Show less'}
            </ClambToggleBtn>
          )}
        </DescrContentWrap>
      )}

      {url && (
        <ReviewLink href={url} target="_blank" rel="noopener noreferrer">
          <HiLink /> View original review
        </ReviewLink>
      )}
    </>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.object.isRequired,
};
