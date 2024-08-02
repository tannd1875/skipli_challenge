import React, { useState } from "react";
import "../styles/PhoneAuth.css";
import { VerifyPhoneOnText } from "../utils/Verify";
import { Link } from "react-router-dom";

const PhoneAuthentication = () => {
  const [phone, setPhone] = useState();
  const [verifyPhone, setVerifyPhone] = useState(false);

  return (
    <div className="container">
      <p className="heading">Welcome to Skipli Gen AI</p>
      <p className="description">
        To start with us, please assign your number phone
      </p>
      <form action="" className="form-container">
        <input
          type="text"
          name="phone"
          id=""
          className="text-input"
          onChange={(e) => {
            setPhone(e.target.value);
            setVerifyPhone(VerifyPhoneOnText(phone));
          }}
          placeholder="Your phone number here"
        />
        <Link
          to={verifyPhone && phone ? `/code-auth?phoneNumber=${phone}` : "#"}
          className="submit-input"
        >
          Send Verified Code
        </Link>
      </form>
      {verifyPhone === false && phone ? (
        <p className="text-wrong-format">
          Your phone is not true format, please try again.
        </p>
      ) : null}
    </div>
  );
};

export default PhoneAuthentication;
