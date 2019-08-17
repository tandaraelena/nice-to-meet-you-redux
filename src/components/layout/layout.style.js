import styled from 'styled-components'

export const NavbarStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: transparent;
  padding: 5px; 
  z-index: 1;
  font-size: 16px;
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

export const StyledHeader = styled.div`
  margin: 0;
  height: 300px;
  width: 100%;
  position: relative;
  display: grid;
  color: white;
  background: transparent;
  overflow: hidden;
  .header-content {
    z-index: 1;
    text-align: center;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    background: linear-gradient( #6827b0, #6195ED);
    transform: scaleX(1.2);
  }
`