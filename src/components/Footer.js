import React from "react";
import { Link } from "@material-ui/core";

const Footer = () => {
  return (
    <div id="footer">
      <Link href="https://github.com/ChrisOwen101/SouthAfricanCodeSchools">
        Go to the source on Github
      </Link>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSciBsoj5AH6RKc0-DAh_x3QAggP6bCkCFYdCN3Tdu4rKEmJlw/viewform">
        Add a School
      </Link>
      <Link href="mailto:info@codeschooldirectory.co.za">
        Something wrong? Contact us
      </Link>
    </div>
  );
};

export default Footer;
