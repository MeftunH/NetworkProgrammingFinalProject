import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
      return "Kullanici ismi 3 40 karakter arasinda olmalidir ve sifre 6 40 karakter arasinda olmalidir. E-mail adresi dogru girilmelidir";
};

const getFormValidMessage = () => {
  return "Kayit olmak icin tikla!";
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const history = useHistory();

  const handlePushToLoginPage = () => {
    history.push("/login");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Kayit ol"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Zaten bir hesabin var mi?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
