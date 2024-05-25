const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
        <div class="social-links">
          <a href="https://www.facebook.com/jasser.cherif.79/?locale=fr_FR" class="twitter">
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/jasser.cherif/"
            class="instagram"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://github.com/jassercherif" class="google-plus">
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jasser-cherif-a74037255/"
            class="linkedin"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="mailto:jasser.cherif@ensi-uma.tn">
            <i class="bx bx-envelope"></i>
          </a>
        </div>
        <div class="credits" style={{ color: "#74808a" }}>
          Made with <span style={{ color: "#e25555" }}>&hearts;</span> using
          React
        </div>
      </div>
    </footer>
  );
};

export default Footer;
