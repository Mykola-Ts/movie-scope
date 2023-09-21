import { useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { StyledLink } from './ToBackLink.styled';

export const ToBackLink = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <StyledLink to={backLinkHref}>
      <BiArrowBack size={20} /> Back to movies
    </StyledLink>
  );
};
