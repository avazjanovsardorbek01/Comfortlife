import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          {/* Contact Section */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="widget">
              <h3>{t("contact")}</h3>
              <address>{t("location_value")}</address>
              <ul className="list-unstyled links">
                <li>
                  <a href={`tel:${import.meta.env.VITE_TELEFON_URL}`}>
                    {import.meta.env.VITE_TELEFON_URL}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${import.meta.env.VITE_EMAIL_URL}`}>
                    {import.meta.env.VITE_EMAIL_URL}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sources Section */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="widget">
              <h3>{t("sources")}</h3>
              <div className="d-flex flex-wrap justify-content-between">
                <ul className="list-unstyled links">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Vision</a>
                  </li>
                  <li>
                    <a href="#">Mission</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
                <ul className="list-unstyled links">
                  <li>
                    <a href="#">Partners</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Creative</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="widget">
              <h3>{t("links")}</h3>
              <ul className="list-unstyled links ">
                <li>
                  <Link to="/properties">{t("properties")}</Link>
                </li>
                <li>
                  <Link to="/about">{t("about")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("contact")}</Link>
                </li>
              </ul>

              {/* Social Links */}
              <ul className="list-unstyled social d-flex flex-wrap justify-content-start">
                <li className="list-inline-item">
                  <a href={import.meta.env.VITE_YOU_TUBE_URL} target="_blank">
                    <span className="icon-youtube"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={import.meta.env.VITE_FACEBOOK_URL} target="_blank">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={import.meta.env.VITE_TELEGRAM_URL} target="_blank">
                    <span className="icon-telegram"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href={`mailto:${import.meta.env.VITE_EMAIL_URL}`}
                    target="_blank"
                  >
                    <span className="icon-envelope"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={`tel:${import.meta.env.VITE_TELEFON_URL}`}>
                    <span className="icon-phone"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script>. All
              Rights Reserved. &mdash; Designed with love by &nbsp;
              <a href="https://itkey.uz/">ITKey.uz</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
