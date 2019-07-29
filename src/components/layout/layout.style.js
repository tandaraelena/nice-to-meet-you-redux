import styled from 'styled-components'

export const NavbarStyled = styled.div`
  width: 100%;
  /* height: 20px; */
  background-color: grey;
  display: flex;
  a {
    color: white;
    padding: 5px; 
  }
`

export const SignedInLinksStyled = styled.span`
  display: flex;
  flex-direction: row;
  color: blue;
  a {
    padding: 5px;
  }
`