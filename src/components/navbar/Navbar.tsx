import { Link, NavLink } from "react-router-dom";
import uz from "../../assets/uzbekistan.jpg";
import ru from "../../assets/russia.jpg";
import en from "../../assets/england.jpg";
import "./navbar.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import { useSettings } from "../../contexts/setting-context";
import { supportedLangs } from "../../types/supportedLangs";
import TIcon from "../../assets/tIcon.png";

function Navbar() {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  const { settings, saveSettings } = useSettings();

  function changeLang(lang: string) {
    // Ensure lang is of type 'supportedLangs'
    const validLang = lang as supportedLangs; // Casting the string to supportedLangs type
    saveSettings({ ...settings, lang: validLang });
    changeLanguage(validLang);
  }

  return (
    <>
      {/* Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-end"
        id="offcanvasRight"
        tabIndex={-1}
        aria-labelledby="offcanvasRightLabel"
        style={{
          backgroundColor: "#EFEFEF",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="offcanvas-header"
          style={{
            borderBottom: "1px solid #dee2e6",
            padding: "20px",
          }}
        >
          <h5
            className="offcanvas-title"
            style={{
              fontWeight: "600",
              fontSize: "20px",
              color: "#343a40", // Тёмный текст
            }}
          >
            {t("Menu")}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{
              color: "#6c757d", // Цвет иконки
            }}
          ></button>
        </div>
        <div
          className="offcanvas-body"
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px", // Интервалы между элементами
          }}
        >
          <ul className="nav flex-column">
            {["home", "properties", "about", "contact"].map((item) => (
              <li
                key={item}
                className="nav-item"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <NavLink
                  to={`/${item === "home" ? "" : item}`}
                  className="nav-link d-flex mb-2"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff", // Белый текст для активной ссылки
                          backgroundColor: "#956D57", // Синий фон
                          borderRadius: "10px", // Скругление
                          padding: "10px 15px", // Внутренние отступы
                          fontWeight: "bold",
                        }
                      : {
                          color: "#343a40", // Тёмный текст
                          padding: "10px 15px",
                          borderRadius: "10px",
                          transition: "all 0.3s ease",
                        }
                  }
                >
                  {t(item)}
                </NavLink>
                {/* <hr className="dropdown-divider" /> */}
              </li>
            ))}
          </ul>
          <div className="dropdown mt-3">
            <button
              className="language-btn  btn dropdown-toggle w-100"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                backgroundColor: "#f8f9fa", // Светлый фон
                border: "1px solid", // Обводка
                borderRadius: "10px",
                padding: "10px 15px",
                fontWeight: "bold",
              }}
            >
              <img
                src={
                  settings.lang === "en" ? en : settings.lang === "ru" ? ru : uz
                }
                alt="lang"
                className="rounded me-2"
                style={{ width: "20px", height: "15px" }}
              />
              {settings.lang.toUpperCase()}
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="languageDropdown"
              style={{
                borderRadius: "10px", // Скругление углов
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Тень
              }}
            >
              {[
                { code: "uz", flag: uz },
                { code: "ru", flag: ru },
                { code: "en", flag: en },
              ].map(({ code, flag }) => (
                <li key={code} onClick={() => changeLang(code)}>
                  <div
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      padding: "10px 15px", // Отступы
                      fontSize: "16px",
                    }}
                  >
                    <img
                      src={flag}
                      alt={code}
                      className="rounded me-2"
                      style={{ width: "20px", height: "15px" }}
                    />
                    {code.toUpperCase()}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top shadow"
        style={{
          backgroundColor: "#956D57",
          width: "85%", // Увеличенная ширина
          margin: "15px auto", // Центрирование и отступы сверху/снизу
          borderRadius: "5px", // Скругление краев для красивого эффекта
          padding: "10px", // Увеличенный внутренний отступ
        }}
      >
        <div className="container">
          {/* Логотип и Заголовок */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={TIcon}
              alt="Logo"
              className="me-2"
              style={{ height: "50px" }} // Увеличенный размер логотипа
            />
            <div>
              <span
                className="navbar-brand"
                style={{
                  fontSize: "24px", // Увеличенный размер шрифта заголовка
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                {t("title").split(" ")?.[0]}
              </span>
              <br />
              <span style={{ fontSize: "18px", color: "#fff" }}>
                {t("title").split(" ")?.[1]}
              </span>
            </div>
          </Link>

          {/* Кнопка переключения меню */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <Icon
              icon="gg:menu-right"
              className="text-white"
              style={{ fontSize: "28px" }} // Увеличенный размер иконки
            />
          </button>

          {/* Меню для десктопа */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              {["home", "properties", "about", "contact"].map((item) => (
                <li key={item} className="nav-item">
                  <NavLink
                    to={`/${item === "home" ? "" : item}`}
                    className="nav-link"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", fontWeight: "bold" }
                        : { color: "#fff" }
                    }
                  >
                    {t(item)}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Выпадающее меню выбора языка */}
            <div className="dropdown ms-3">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={
                    settings.lang === "en"
                      ? en
                      : settings.lang === "ru"
                        ? ru
                        : uz
                  }
                  alt="lang"
                  className="rounded me-2"
                  style={{ width: "20px", height: "15px" }}
                />
                {settings.lang.toUpperCase()}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="languageDropdown"
                style={{
                  borderRadius: "10px", // Скругление углов
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Тень
                }}
              >
                {[
                  { code: "uz", flag: uz },
                  { code: "ru", flag: ru },
                  { code: "en", flag: en },
                ].map(({ code, flag }) => (
                  <li key={code} onClick={() => changeLang(code)}>
                    <div
                      className="dropdown-item d-flex align-items-center"
                      style={{
                        padding: "10px 15px", // Отступы
                        fontSize: "16px",
                      }}
                    >
                      <img
                        src={flag}
                        alt={code}
                        className="rounded me-2"
                        style={{ width: "20px", height: "15px" }}
                      />
                      {code.toUpperCase()}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
