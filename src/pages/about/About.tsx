import { Slide, SlideshowRef } from "react-slideshow-image";
import "./about.scss";
import { useLayoutEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import office1 from "../../assets/comfortlife_1-min.webp";
import office2 from "../../assets/office_2.webp";
import office3 from "../../assets/office_3.webp";
import eg1 from "../../assets/eg1.jpg";
import eg2 from "../../assets/eg2.jpg";
import eg3 from "../../assets/eg3.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";
import poltoran_egor from "../../assets/poltoran_egor.png";
import mexa_gulyamova from "../../assets/mexa_gulyamova.png";
import sanjar from "../../assets/sanjar.jpg";
import rauf from "../../assets/rauf.jpg";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 100,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];
const About = () => {
  let AgentsRef = useRef<SlideshowRef>(null);
  const { t } = useTranslation();
  const agents = useMemo(() => {
    return [
      {
        img: poltoran_egor,
        name: t("Poltoran Egor"),
        position: t("director"),
        description: t("poltoran_egor_info"),
      },
      {
        img: mexa_gulyamova,
        name: "Mexa Gulyamova",
        position: t("manager"),
        description: t("mexa_gulyamova_info"),
      },
      {
        img: sanjar,
        name: "Maminov Sanjar",
        position: t("rieltor"),
        description: t("sanjar_info"),
      },
      {
        img: rauf,
        name: "Bauyetdinov Rauf",
        position: t("marketolog"),
        description: t("rauf_info"),
      },
    ];
  }, [t]);
  useLayoutEffect(() => {
    scroll.scrollToTop({ delay: 100 });
  }, []);
  return (
    <>
      <div
        className="hero page-inner overlay"
        style={{ backgroundImage: `url('${office1}')` }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center mt-5">
              <h1 className="heading" data-aos="fade-up">
                {t("about")}
              </h1>

              <nav
                aria-label="breadcrumb"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <ol className="breadcrumb text-center justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>{t("home")}</Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-white-50"
                    aria-current="page"
                  >
                    {t("about")}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row text-left mb-5">
            <div className="col-12">
              <h2 className="font-weight-bold heading text-primary mb-4">
                {t("about_us")}
              </h2>
            </div>
            <div className="col-lg-6">
              {t("about_us_value1")
                .split("#break")
                .map((item, index) => {
                  return (
                    <p className="text-black-50" key={index}>
                      {item}
                    </p>
                  );
                })}
            </div>
            <div className="col-lg-6">
              {t("about_us_value2")
                .split("#break")
                .map((item, index) => {
                  return (
                    <p className="text-black-50" key={index}>
                      {item}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div className="section pt-0">
        <div className="container">
          <div className="row justify-content-between mb-5">
            <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
              <div className="img-about dots">
                <img
                  src={office2}
                  alt="Image"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    maxWidth: "730px",
                    height: "auto",
                    aspectRatio: "2/1.5",
                    pointerEvents: "none",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-home2"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">
                    {t("over_thousand")} {t("properties")}
                  </h3>
                  <p className="text-black-50">{t("over_smth_value")}</p>
                </div>
              </div>

              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-person"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">{t("top_rated_agents")}</h3>
                  <p className="text-black-50">{t("top_rated_agents_value")}</p>
                </div>
              </div>

              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-security"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">{t("legit_properties")}</h3>
                  <p className="text-black-50">{t("legit_properties_value")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section pt-0">
        <div className="container">
          <div className="row justify-content-between mb-5">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="img-about dots">
                <img
                  src={office3}
                  alt="Image"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    maxWidth: "730px",
                    height: "auto",
                    aspectRatio: "2/1.5",
                    pointerEvents: "none",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-home"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">{t("to_sell_home")}</h3>
                  <p className="text-black-50">{t("to_sell_home_value")}</p>
                </div>
              </div>

              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-bookmark"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">{t("to_bookmark")}</h3>
                  <p className="text-black-50">{t("to_bookmark_value")}</p>
                </div>
              </div>

              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <Icon
                    icon="material-symbols-light:speed-outline"
                    className="icon-"
                    style={{ fontSize: "30px" }}
                  />
                </span>
                <div className="feature-text">
                  <h3 className="heading">{t("to_speed")}</h3>
                  <p className="text-black-50">{t("to_speed_value")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="0">
              <img src={eg1} alt="Image" className="img-fluid" />
            </div>
            <div
              className="d-none d-sm-block col-md-4 mt-lg-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={eg2} alt="Image" className="img-fluid" />
            </div>
            <div
              className="d-none d-sm-block col-md-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={eg3} alt="Image" className="img-fluid" />
            </div>
          </div>
          <div className="row section-counter mt-5">
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary">9316</span>
                </span>
                <span className="caption text-black-50">
                  # {t("all_properties")}
                </span>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary"> 3298</span>
                </span>
                <span className="caption text-black-50">
                  # {t("sell_properties")}
                </span>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary">2181</span>
                </span>
                <span className="caption text-black-50">
                  # {t("buy_properties")}
                </span>
              </div>
            </div>

            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary">34</span>
                </span>
                <span className="caption text-black-50">
                  # {t("all_agents")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div
          className="row justify-content-center footer-cta"
          data-aos="fade-up"
        >
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="mb-4">{t("growing_community")}</h2>
            <p>
              <Link
                to={"/contact"}
                className="btn btn-primary text-white py-3 px-4"
              >
                {t("apply_community")}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div
        className="section section-5 bg-light"
        style={{ boxSizing: "border-box" }}
      >
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-6">
              <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
                {t("our_agents")}
              </h2>
            </div>
            <div className="col-md-6 text-md-end">
              <div id="testimonial-nav">
                <span
                  className="prev"
                  data-controls="prev"
                  onClick={() => AgentsRef.current?.goBack()}
                >
                  {t("prev")}
                </span>
                <span
                  className="next"
                  data-controls="next"
                  onClick={() => AgentsRef.current?.goNext()}
                >
                  {t("next")}
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4"></div>
          </div>
          <div className="agents-slider-wrap">
            <div className="agents-slider">
              <Slide
                slidesToScroll={2}
                slidesToShow={2}
                indicators={true}
                arrows={false}
                ref={AgentsRef}
                responsive={responsiveSettings}
                duration={3000}
              >
                {agents
                  .filter((agent) => agent.name !== "Maminov Sanjar") // Фильтруем агента
                  .map((agent) => (
                    <div className="item" key={agent.name}>
                      <div className="person card">
                        <img
                          src={agent.img}
                          alt="Image"
                          className="img-fluid"
                          style={{
                            pointerEvents: "none",
                            height: "90px",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                        <div className="person-contents d-flex flex-column">
                          <h2 className="mb-0">{agent.name}</h2>
                          <span className="meta d-block mb-3">
                            {agent.position}
                          </span>
                          <p>{agent.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
