import styled from 'styled-components'

export const StyledList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-content: center;

  > div:nth-child(odd){
    background-image: linear-gradient(to right top, #70118b, #904fa6, #af80c0, #ceb2d9, #eee5f2);
  }
  > div:nth-child(even){
    background-image: linear-gradient(to left top, #70118b, #904fa6, #af80c0, #ceb2d9, #eee5f2);
  }
`

export const StyledDayItem = styled.div`
  border: 1px solid transparent;
  border-radius: 10px;
  /* background-image: linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #a8eb12); */
  text-align: center;
  padding: 10px;
`