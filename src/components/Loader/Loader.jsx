import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import { Wrapper, Text } from './Loader.styled';

export const Loader = ({
  isLoading,
  text = 'Loading data, please wait...',
  isCommonLoader = true,
}) => {
  return (
    <>
      {isLoading && (
        <Wrapper className={isCommonLoader ? 'common-loader' : ''}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="4"
            animationDuration="1"
            width="72"
            visible={true}
          />

          <Text>{text}</Text>
        </Wrapper>
      )}
    </>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  text: PropTypes.string,
  isCommonLoader: PropTypes.bool,
};
