import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Photo = styled.img`
  width: 184px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 210px;
  }
`;

export const Descr = styled.div`
  padding: 16px;

  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0.36px;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;

  &:is(:hover, :focus) {
    text-decoration: underline;
  }

  &.photo img {
    transition: transform var(--transition-duration)
      var(--transition-timing-function);

    &:is(:hover, :focus) {
      transform: scale(1.05);
    }
  }
`;

export const Name = styled.h4`
  margin-bottom: 8px;

  font-size: 22px;
  line-height: normal;
  letter-spacing: 0.44px;
`;

export const DescrItem = styled.p`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const DescrItemValue = styled.span`
  font-weight: 700;
`;
