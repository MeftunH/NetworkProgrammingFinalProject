import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterPageInputs = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;

  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail adresi"
        type="text"
        placeholder="E-mail adresi gir"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Kullanici adi"
        type="text"
        placeholder="Kullanici adi gir"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Sifre"
        type="password"
        placeholder="Sifre gir"
      />
    </>
  );
};

export default RegisterPageInputs;
