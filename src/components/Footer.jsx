import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Check out our iOS app <a href="https://apps.apple.com/us/app/statistics-calculator-basic/id1535098606">here.</a></p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;