import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { StyledLink } from './ToBackLink.styled';

export const ToBackLink = ({ text }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? location.state?.parent ?? '/';

  return (
    <StyledLink
      to={backLinkHref}
      state={{ from: location.state?.parent ?? '/' }}
    >
      <BiArrowBack size={20} /> {text}
    </StyledLink>
  );
};

ToBackLink.propTypes = {
  text: PropTypes.string.isRequired,
};
