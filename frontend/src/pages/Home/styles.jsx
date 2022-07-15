import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${ props => props.theme.primary };
  padding: 1rem 2rem;
  width: 100%;
  min-height: 80vh;
`;

const Wrapper = styled.article`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  min-width: 50%;
  max-width: 100%;
`;

const WrapperForm = styled(Wrapper)`
  flex-flow: row nowrap;
  min-width: 50%;
  max-width: 75%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border: 0.0625rem solid ${props => props.theme.secondary};
  border-radius: 0.25rem;
  background-color: ${ props => props.theme.secondary};
  color: ${ props => props.theme.primary};
  text-align: center;

  margin: 0.5rem;
  padding: 1rem 2rem;
  transition: 0.5s;
  min-width: 10rem;
  max-width: 20rem;
  min-height: 15rem;

  p:nth-child(1) {
    font-size: 1rem;
    font-weight: 600;
  }

  p:nth-child(2) {
    font-size: 0.75rem;
    font-weight: 300;
  }

  :hover {
    background-color: ${ props => props.theme.accent };
    border: 0.0625rem solid ${props => props.theme.accent};
  }
`;

const Division = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 100%;
  
  h1 {
    color: ${props => props.theme.secondary};
    font-size: 2rem;
    padding: 1rem 2rem;
    text-align: center;
    width: 100%;
  }
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.secondary};
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  margin: 0.5rem 0;
  padding: 0.75rem 1.5rem;
  min-width: 10rem;
  max-width: 15rem;

  border: 0.0625rem solid ${props => props.theme.secondary};
  border-radius: 0.25rem;

  background-color: ${props => props.theme.primary};
  color: ${ props => props.theme.secondary };

  font-weight: 500;

  transition: 0.5s;

  :hover {
    background-color: ${props => props.theme.secondary};
    border: 0.0625rem solid ${props => props.theme.secondary};
    color: ${props => props.theme.primary};;
  }
`;

const ButtonSubmit = styled(Button)`
  width: 20%;
  height: 5rem;
`;

const ButtonDelete = styled(Button)`
  :hover {
    background-color: ${props => props.theme.alert};
    border: 0.0625rem solid ${props => props.theme.alert};
  }
`;

export {
  Container,
  Wrapper,
  WrapperForm,
  Section,
  Division,
  Input,
  Button,
  ButtonSubmit,
  ButtonDelete,
};
