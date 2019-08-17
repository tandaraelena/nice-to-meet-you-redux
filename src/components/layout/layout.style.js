import styled from 'styled-components'

export const NavbarStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgba(255, 0, 0, 0.3);
  padding: 5px; 

  a {
    color: white;
  }
`

export const SignedInLinksStyled = styled.span`
  text-align: right;

  a {
    padding: 5px;
  }
`