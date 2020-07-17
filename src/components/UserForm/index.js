import React from "react";
import { Form, Button, Input, Title } from "./styles";
import { useInputValue } from "../../hooks/useInputValue";

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue;
  const password = useInputValue;

  return (
    <div className="container">
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input type="text" placeholder="Email" {...email} />
        <Input type="password" placeholder="Password" {...password} />
        <Button>{title}</Button>
      </Form>
    </div>
  );
};
