import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const theme = {
  primary: "#6e27c5",
  secondary: "#ffb617",
  danger: "#f16623",
  light: "#f4f4f4",
  dark: "#222"
};

export const Button = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: #6e27c5;
  color: white;
  border: 2px solid #6e27c5;
  cursor: pointer;
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`;

const Form = (props: any) => (
  <form onSubmit={props.getWeather}>
    <Input type="text" name="city" placeholder="city" />
    <Input type="text" name="country" placeholder="country" />

    <Button>search</Button>
  </form>
);
export default Form;
