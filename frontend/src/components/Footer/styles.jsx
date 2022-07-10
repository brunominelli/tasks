import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  line-height: 1.5;
`;

export default Container;
