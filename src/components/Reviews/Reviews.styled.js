import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li`
  border-radius: 8px;
  padding: 16px;

  overflow: hidden;

  color: var(--black-color);
  background-color: var(--gray-color);
  box-shadow: var(--box-shadow);

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const NoReviewText = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0.36px;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: normal;
    letter-spacing: 0.44px;
  }
`;
