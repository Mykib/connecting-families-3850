import React, { useState } from "react";

import { Button } from "@material-ui/core";
import SignUpDialog from "./SignUpDialog";

function SignUpButton(props) {
  const [signUpOpen, setSignUpOpen] = useState(false);
  
  const handleOpenSignUp = () => {
    setSignUpOpen(true);
  };
  
  const backFromSignUp = () => {
    setSignUpOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        id="sign-in"
        size="large"
        onClick={() => {setSignUpOpen(!signUpOpen)}}
      >
        Sign Up
      </Button>

      {signUpOpen && (
        <SignUpDialog setOpen={handleOpenSignUp} goBack={backFromSignUp} />
      )}
    </div>
  );
}

export default SignUpButton;
