import styled from "styled-components";

export const Header = styled.header`
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-between;
  z-index: 40;
  color: white;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
`;

/**------------------------------------- */

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;

  & > li > a {
    font-weight: 500;
    color: currentColor;
    display: inline-block;
    padding: 0.5rem 1rem;
  }

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  &:hover {
    background-color: black;
    color: white;
    border-radius: 0.25rem;
  }
`;
