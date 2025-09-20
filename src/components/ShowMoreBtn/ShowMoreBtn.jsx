import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import { StyledButton } from './ShowMoreBtn.styled';

export const ShowMoreBtn = ({ isLastPage, isLoading, onClick }) => {
  return (
    <>
      {!isLoading && !isLastPage && (
        <StyledButton type="button" onClick={onClick}>
          Show more
        </StyledButton>
      )}

      <Loader isLoading={isLoading} isCommonLoader={false} />
    </>
  );
};

ShowMoreBtn.propTypes = {
  isLastPage: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
