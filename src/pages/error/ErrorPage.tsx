import { useTranslation } from "react-i18next";
import png404 from "../../assets/404.png";
import "./error.scss";
function ErrorPage() {
  const { t } = useTranslation();
  return (
    <div className="error">
      <img src={png404} alt="404 image" className="error-img" />
      <a href="/" className="error-link">
        <h3 className="error-text">{t("404Text")}</h3>
      </a>
    </div>
  );
}

export default ErrorPage;
