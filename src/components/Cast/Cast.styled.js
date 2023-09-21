import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
`;

export const ListItem = styled.li`
  border-radius: 8px;

  overflow: hidden;

  color: var(--black-color);
  background-color: var(--gray-color);
  box-shadow: var(--box-shadow);

  @media screen and (max-width: 1439px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 24px;

    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 32px) / 2);
  }
`;

export const NoCastText = styled.p`
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
