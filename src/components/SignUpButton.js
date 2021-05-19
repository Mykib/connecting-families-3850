import React, { useState } from "react";

import { Button } from "@material-ui/core";
import SignInDialog from "./SignInDialog";
import SignUpDialog from "./SignUpDialog";

function SignUpButton(props) {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  const backFromSignUp = () => {
    setSignUpOpen(false);
  };

  const goSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        id="sign-in"
        size="large"
        onClick={() => {
          setSignUpOpen(!signUpOpen);
        }}
      >
        Sign Up
      </Button>
      {signUpOpen && (
        <SignUpDialog setOpen={setSignUpOpen} goBack={backFromSignUp} goSignIn={goSignIn} />
      )}{" "}
      {signInOpen && (
        <SignInDialog open={signInOpen} setOpen={setSignInOpen} />
      )}
    </div>
  );
}

export default SignUpButton;
