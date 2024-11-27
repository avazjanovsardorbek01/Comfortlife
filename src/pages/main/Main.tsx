import { TypeAnimation } from "react-type-animation";
import { Slide, SlideshowRef, Zoom } from "react-slideshow-image";
//NOTE images
import bukhara1 from "../../assets/comfortlife_1-min.webp";
import bukhara2 from "../../assets/comfortlife_2-min.webp";
import bukhara3 from "../../assets/comfortlife_3-min.webp";
import bukhara4 from "../../assets/comfortlife_4-min.webp";
import viner from "../../assets/viner.jpg";
import mmm from "../../assets/mmm.jpg";
import joxon from "../../assets/joxon.jpg";
import noResult from "../../assets/no_results.png";
import poltoran_egor from "../../assets/poltoran_egor.png";
import mexa_gulyamova from "../../assets/mexa_gulyamova.png";
import sanjar from "../../assets/sanjar.jpg";
import "./main.scss";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../contexts/search-filter";
import FilterForm from "../../components/filterForm";
import ModalForm from "../../components/modalFilter/ModalForm";
import { animateScroll as scroll } from "react-scroll";
import { useQuery } from "@tanstack/react-query";
import { getObjects } from "../../api/Requests";
import ObjectCard from "../../components/objectCard/ObjectCard";
import Loading from "../../components/loading";
import { useTranslation } from "react-i18next";
import office2 from "../../assets/office_2.webp";
import { IFilterData } from "../../types/IFilter";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
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
const responsiveSettingsAgents = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
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
function filterIgnore(obj: IFilterData, arr: string[]): IFilterData {
  let sample: IFilterData = {
    analyse_by: "Продажа",
    price_by: "Рыночная цена",
  };
  for (let [key, value] of Object.entries(obj)) {
    if (!arr.includes(key)) {
      sample[key] = value;
    }
  }
  return sample;
}
function Main() {
  const SlideShowRef = useRef<SlideshowRef>(null);
  const TestimonialRef = useRef<SlideshowRef>(null);
  const { t } = useTranslation();
  const [autoPlaySlide, setAutoPlaySlide] = useState(true);
  const { filters } = useFilter();
  const { data, refetch, isFetching } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["slider_objects"],
    queryFn: async () => await getObjects(filterIgnore(filters, [])),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const customer_says = useMemo(() => {
    return [
      {
        name: "Xoliqjon Samadov",
        img: viner,
        says: t("xoliqjon_vines_says"),
        nick: "xoliqjon_vines",
        link: "https://www.instagram.com/xoliqjon_vines/",
      },
      {
        name: "Mirsaid Mirahmedov",
        img: mmm,
        says: t("mirsaid20045_says"),
        nick: "mirsaid20045",
        link: "https://www.instagram.com/mirsaid20045/?igsh=cXcyaHRldnMxcGxo",
      },
      {
        name: "Shoahmedov Johongir",
        img: joxon,
        says: t("joxa__uzb1_says"),
        nick: "joxa__uzb1",
        link: "https://www.instagram.com/joxa__uzb1",
      },
    ];
  }, [t]);
  const agents = useMemo(() => {
    return [
      {
        img: poltoran_egor,
        name: t("Poltoran Egor"),
        position: t("director"),
        description:   t("agent_description")
            .replace("#name", t("Poltoran Egor"))
            .replace("#position", t("director")),
      },
      {
        img: mexa_gulyamova,
        name: t("Mexa Gulyamova"),
        position: t("manager"),
        description:  t("agent_description")
            .replace("#name", t("Mexa Gulyamova"))
            .replace("#position", t("manager")),
      },
      {
        img: sanjar,
        name: t("Maminov Sanjar"),
        position: t("rieltor"),
        description:  t("agent_description")
            .replace("#name", t("Maminov Sanjar"))
            .replace("#position", t("rieltor")),
      }
    ];
  }, [t]);
  console.log("main", { data });
  useEffect(() => {
    refetch();
    SlideShowRef?.current?.goTo(0);
    // eslint-disable-next-line
  }, [filters]);
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <ModalForm
        offersFound={data?.data?.data?.length ?? 0}
        target={"container"}
      />
      <div className="hero" style={{ minHeight: "100vh" }}>
        <div className="hero-slide">
          <Zoom scale={1.4} arrows={false} indicators={false} duration={3000}>
            <div className="img overlay" style={{ width: "100%" }}>
              <img
                src={bukhara1}
                alt="comfortlife_1"
                style={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                  filter: "brightness(0.8)",
                }}
              />
            </div>
            <div className="img overlay" style={{ width: "100%" }}>
              <img
                src={bukhara2}
                alt="comfortlife_1"
                style={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                  filter: "brightness(0.8)",
                }}
              />
            </div>
            <div className="img overlay" style={{ width: "100%" }}>
              <img
                src={bukhara3}
                alt="comfortlife_1"
                style={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                  filter: "brightness(0.8)",
                }}
              />
            </div>
            <div className="img overlay" style={{ width: "100%" }}>
              <img
                src={bukhara4}
                alt="comfortlife_1"
                style={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                  filter: "brightness(0.8)",
                }}
              />
            </div>
          </Zoom>
        </div>

        <div className="container mt-10">
          <div className="row justify-content-center align-items-end">
            <div
              className="col-lg-12 text-center"
              style={{ marginBottom: "6%" }}
            >
              <TypeAnimation
                className="heading"
                data-aos="fade-up"
                sequence={[
                  "Самый простой способ найти дом своей мечты",
                  1000,
                  "The easiest way to find your dream home",
                  1000,
                  "Sizning orzuingizdagi uyni topishning eng oson yo'li",
                  1000,
                  "Awesome houses with affordable prices",
                  1000,
                ]}
                wrapper="h1"
                speed={50}
                repeat={Infinity}
              />

              <FilterForm
                inputTitleStyle={{ color: "white" }}
                offersFound={data?.data?.data?.length ?? 0}
                target={"container"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="container">
        <div className="container">
          <div className="row mb-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="font-weight-bold text-primary heading">
                {t("popular_properties")}
              </h2>
            </div>
            <div className="col-lg-6 text-lg-end">
              <p>
                <Link
                  to={"/properties"}
                  className="btn btn-primary text-white py-3 px-4"
                >
                  {t("viewAllProperties")}
                </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="property-slider-wrap">
                <div className="property-slider">
                  {data?.data?.data &&
                  data?.data?.data.length > 0 &&
                  !isFetching ? (
                    <Slide
                      ref={SlideShowRef}
                      slidesToScroll={1}
                      slidesToShow={1}
                      indicators={false}
                      autoplay={false}
                      infinite={false}
                      onStartChange={() => {
                        if (!autoPlaySlide) {
                          SlideShowRef.current?.goBack();
                        }
                      }}
                      arrows={false}
                      canSwipe={
                        data?.data && data?.data?.data?.length > 1
                          ? autoPlaySlide
                          : false
                      }
                      responsive={responsiveSettings}
                      duration={10000}
                      onChange={(prev, next) => {
                        console.log({ prev, next });
                        if (Number(data?.data?.data?.length) > 9) {
                          if (window.innerWidth >= 992 && next === 7) {
                            setAutoPlaySlide(false);
                          } else if (window.innerWidth < 768 && next === 9) {
                            setAutoPlaySlide(false);
                          } else if (
                            window.innerWidth < 992 &&
                            window.innerWidth > 767 &&
                            next === 8
                          ) {
                            setAutoPlaySlide(false);
                          } else {
                            if (!autoPlaySlide) setAutoPlaySlide(true);
                          }
                        }
                      }}
                    >
                      {data?.data?.data?.map((row, index) => {
                        return data?.data?.data?.length - 1 === index &&
                          data?.data?.data?.length > 9 ? (
                          <ObjectCard
                            apartmentData={row}
                            images={data?.data?.images[index]}
                            key={row.$id}
                          >
                            <div className="view_more"></div>
                            <Link
                              to={"/properties"}
                              className="btn btn-primary text-white py-3 px-4 view_more_btn text-truncate"
                            >
                              {t("viewAllProperties")}
                              <span
                                className="position-absolute top-0 start-10 translate-start badge rounded-pill bg-danger"
                                style={{
                                  right: "10px",
                                  fontSize: "12px",
                                }}
                              >
                                {data?.data?.data?.length - 1}+
                                <span className="visually-hidden">
                                  Найденно предложений
                                </span>
                              </span>
                            </Link>
                          </ObjectCard>
                        ) : (
                          <ObjectCard
                            apartmentData={row}
                            images={data?.data?.images[index]}
                            key={row.$id}
                          />
                        );
                      })}
                    </Slide>
                  ) : isFetching ? (
                    <Loading style={{ height: "400px" }} />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "10px",
                        height: "400px",
                      }}
                    >
                      <h4>{t("no_result")}</h4>
                      <img src={noResult} alt="no image" />
                    </div>
                  )}
                </div>
                <div
                  id="property-nav"
                  className="controls"
                  aria-label="Carousel Navigation"
                >
                  <span
                    className="prev"
                    data-controls="prev"
                    aria-controls="property"
                    onClick={() => {
                      if (data?.data && data?.data?.data?.length > 1) {
                        SlideShowRef.current?.goBack();
                      }
                    }}
                  >
                    {t("prev")}
                  </span>
                  <span
                    className="next"
                    data-controls="next"
                    aria-controls="property"
                    onClick={() => {
                      if (data?.data && data?.data?.data?.length > 1) {
                        if (autoPlaySlide) {
                          SlideShowRef.current?.goNext();
                        }
                      }
                    }}
                  >
                    {t("next")}
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      <section className="features-1">
        <div className="container">
          <div className="row">
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="box-feature p-3">
                <span className="flaticon-house"></span>
                <h3 className="mb-3">{t("our_properties")}</h3>
                <p className="comment-main">{t("our_properties_value")}</p>
                <p>
                  <Link to="/about" className="learn-more">
                    {t("learn_more")}
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="box-feature p-3">
                <span className="flaticon-building"></span>
                <h3 className="mb-3">{t("property_for_sale")}</h3>
                <p className="comment-main">{t("property_for_sale_value")}</p>
                <p>
                  <Link to="/properties" className="learn-more">
                    {t("learn_more")}
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="box-feature p-3">
                <span className="flaticon-house-3"></span>
                <h3 className="mb-3">{t("real_estate_agent")}</h3>
                <p className="comment-main">{t("real_estate_agent_value")}</p>
                <p>
                  <Link
                    to="/about"
                    className="learn-more"
                    onClick={() => localStorage.setItem("agent", "true")}
                  >
                    {t("learn_more")}
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="box-feature p-3">
                <span className="flaticon-house-1"></span>
                <h3 className="mb-3">{t("house_for_sale")}</h3>
                <p className="comment-main">{t("house_for_sale_value")}</p>
                <p>
                  <Link to="/contact" className="learn-more">
                    {t("learn_more")}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-6">
              <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
                {t("customer_says")}
              </h2>
            </div>
            <div className="col-md-6 text-md-end">
              <div id="testimonial-nav">
                <span
                  className="prev"
                  data-controls="prev"
                  onClick={() => TestimonialRef.current?.goBack()}
                >
                  {t("prev")}
                </span>

                <span
                  className="next"
                  data-controls="next"
                  onClick={() => TestimonialRef.current?.goNext()}
                >
                  {t("next")}
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4"></div>
          </div>
          <div className="testimonial-slider-wrap">
            <div className="testimonial-slider">
              <Slide
                slidesToScroll={2}
                slidesToShow={2}
                indicators={true}
                arrows={false}
                ref={TestimonialRef}
                responsive={responsiveSettings}
                autoplay={false}
              >
                {customer_says.map((say) => {
                  return (
                    <div className="item" key={say.name}>
                      <div className="testimonial">
                        <img
                          src={say.img}
                          alt="Image"
                          className="img-fluid rounded-circle w-25 mb-4"
                        />
                        <h3 className="h5 text-primary mb-2">{say.name}</h3>
                        <div className="rate">
                          <span className="icon-star text-warning"></span>
                          <span className="icon-star text-warning"></span>
                          <span className="icon-star text-warning"></span>
                          <span className="icon-star text-warning"></span>
                          <span className="icon-star text-warning"></span>
                        </div>
                        <p className="text-black-50 d-flex align-items-center gap-1">
                          <span className="icon-instagram"></span>
                          <a href={say.link}>{say.nick}</a>
                        </p>
                        <blockquote>
                          <p>{say.says}</p>
                        </blockquote>
                      </div>
                    </div>
                  );
                })}
              </Slide>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-4 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-5">
              <h2 className="font-weight-bold heading text-primary mb-4">
                {t("lets_find_home")}
              </h2>
              <p className="text-black-50">{t("lets_find_home_value")}</p>
            </div>
          </div>
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

      <div className="section section-5 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-3">
            <div className="col-lg-6 mb-5">
              <h2 className="font-weight-bold heading text-primary mb-3">
                {t("our_agents")}
              </h2>
              <p className="text-black-50">{t("our_agents_value")}</p>
            </div>
          </div>
          <div className="agents-slider-wrap">
            <div className="agents-slider">
              <Slide
                slidesToScroll={2}
                slidesToShow={2}
                indicators={false}
                autoplay={false}
                arrows={false}
                responsive={responsiveSettingsAgents}
              >
                {agents.map((agent) => {
                  return (
                    <div className="item" key={agent.name}>
                      <div className="h-100 person">
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

                        <div className="person-contents">
                          <h2 className="mb-0">{agent.name}</h2>
                          <span className="meta d-block mb-3">
                            {agent.position}
                          </span>
                          <p>{agent.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slide>
            </div>
          </div>
          <div className="col-lg-12 text-lg-end mt-2">
            <p>
              <Link
                to={"/about"}
                onClick={() => localStorage.setItem("agent", "true")}
                className="btn btn-primary text-white py-3 px-4"
              >
                {t("see_all_agents")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
