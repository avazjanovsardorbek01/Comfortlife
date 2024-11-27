import { animateScroll as scroll } from "react-scroll";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getObject, getObjects, postContact } from "../../api/Requests";
import { useFilter } from "../../contexts/search-filter";
import Loading from "../../components/loading";
import ObjectCard from "../../components/objectCard/ObjectCard";
import { Slide, SlideshowRef } from "react-slideshow-image";
import IApartmentRow from "../../types/IApartmentDBService";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./property.scss";
import ModalContactForm from "../../components/modalContactForm";
import ErrorModal from "../../components/errorModal";
import noResult from "../../assets/no_results.png";

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

const Property = () => {
  const params = useParams();
  const { t } = useTranslation();
  const SlideShowRef = useRef<SlideshowRef>(null);
  const ImagesRef = useRef<SlideshowRef>(null);
  const errorBtnRef = useRef<HTMLButtonElement>(null);
  const [autoPlaySlide, setAutoPlaySlide] = useState(true);
  const [property, setProperty] = useState<{
    data: IApartmentRow;
    images: string[];
  } | null>();
  const { filters } = useFilter();
  const object = useQuery({
    queryKey: ["object", params.id],
    queryFn: async () => await getObject(params.id || ""),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const { data, isFetching } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["paginated_objects", String(params.id)],
    queryFn: async () => await getObjects({ ...filters, _favorite: undefined }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const { isSuccess, isPending, mutate, status } = useMutation({
    mutationFn: async (data: {
      telefon: string;
      fio: string;
      comment: string;
      status: "Холодный";
      source: ["С сайта (Прочее)"];
    }) => {
      return await postContact(data);
    },
  });
  useEffect(() => {
    if (object?.data?.data?.data?.[0]) {
      setProperty({
        data: object.data?.data?.data?.[0],
        images: object.data.data.images[0],
      });
    }
    if (object.isFetched && !object?.data?.data?.data?.[0]) {
      errorBtnRef?.current?.click();
      console.log("re-rendering");
    }
    return () => {};
  }, [object.data, object.isFetched, isFetching]);
  useEffect(() => {
    const localProperty = localStorage.getItem("data");
    if (localProperty) {
      const apartment = JSON.parse(localProperty);
      if (apartment?.data?.$id === params?.id) {
        setProperty(apartment);
      } else {
        object.refetch();
      }
    } else {
      object.refetch();
    }
    localStorage.removeItem("data");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);
  useLayoutEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <ModalContactForm
        submitForm={mutate}
        isLoading={isPending}
        response={isSuccess}
        index={property?.data?.index}
        status={status}
      />
      <ErrorModal buttonRef={errorBtnRef} />
      <div
        className="hero page-inner overlay"
        style={{
          backgroundImage: `url(${
            (import.meta.env.DEV
              ? import.meta.env.VITE_APPWRITE_ENDPOINT
              : window.location.origin) + property?.images?.[0]
          })`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center mt-5">
              <h1 className="heading" data-aos="fade-up">
                {property?.data?.zagolovok
                  ? property?.data?.zagolovok
                  : t("ObjTitle") + " " + t("notShown")}
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
                  <li className="breadcrumb-item">
                    <Link to={"/properties"}>{t("properties")}</Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-white-50"
                    aria-current="page"
                  >
                    {property?.data?.zagolovok
                      ? property?.data?.zagolovok
                      : t("ObjTitle") + " " + t("notShown")}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="img-property-slide-wrap">
                <div className="img-property-slide position-relative">
                  {property?.images ? (
                    <>
                      <Slide
                        ref={ImagesRef}
                        slidesToScroll={1}
                        slidesToShow={1}
                        indicators={false}
                        autoplay={false}
                        infinite={false}
                        arrows={false}
                        canSwipe={autoPlaySlide}
                        duration={3000}
                      >
                        {property?.images.map((img, index) => {
                          return (
                            <img
                              key={index}
                              src={
                                (import.meta.env.DEV
                                  ? import.meta.env.VITE_APPWRITE_ENDPOINT
                                  : window.location.origin) + img
                              }
                              alt="Image"
                              className="img-fluid"
                              style={{
                                width: "100%",
                                height: "60vh",
                                objectFit: "cover",
                                objectPosition: "center",
                              }}
                            />
                          );
                        })}
                      </Slide>
                      <button
                        style={{
                          position: "absolute",
                          margin: "auto",
                          width: "20%",
                          height: "100%",
                          top: 0,
                          bottom: 0,
                          left: 0,
                          backgroundColor: "rgba(0,0,0,0.4)",
                        }}
                        onClick={() => {
                          ImagesRef.current?.goBack();
                        }}
                      >
                        <Icon
                          icon="f7:arrowshape-turn-up-left-fill"
                          style={{ fontSize: "23px", color: "#fff" }}
                        />
                      </button>
                      <button
                        style={{
                          position: "absolute",
                          margin: "auto",
                          width: "20%",
                          height: "100%",
                          top: 0,
                          bottom: 0,
                          right: 0,
                          backgroundColor: "rgba(0,0,0,0.4)",
                        }}
                        onClick={() => {
                          ImagesRef.current?.goNext();
                        }}
                      >
                        <Icon
                          icon="f7:arrowshape-turn-up-right-fill"
                          style={{ fontSize: "23px", color: "#fff" }}
                        />
                      </button>
                    </>
                  ) : (
                    <Loading style={{ height: "400px" }} />
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="d-block agent-box p-3 mb-4 mt-0 position-relative">
                <span
                  className="btn btn-primary position-absolute rounded text-truncate top-1 left-5 p-2"
                  style={{
                    top: "-10px",
                    right: "-10px",
                    padding: "10px 20px",
                    width: "auto",
                    maxWidth: "50%",
                    backgroundColor:
                      filters.analyse_by === "Продажа"
                        ? "rgb(0, 85, 85)"
                        : "#956D57",
                  }}
                >
                  {filters.analyse_by === "Продажа" ? t("sale") : t("rent")}
                </span>
                <h3 className="heading text-primary">
                  {property?.data?.zagolovok
                    ? property?.data?.zagolovok
                    : t("ObjTitle") + " " + t("notShown")}
                </h3>
                <h5>
                  <span>
                    $
                    {filters.analyse_by === "Продажа"
                      ? `${property?.data.system_prod_price || property?.data.system_prod_kom_price || " " + t("notShown")}`
                      : `${property?.data.system_rent_price || property?.data.system_rent_kom_price || " " + t("notShown")}`}
                  </span>
                </h5>
                <button
                  className="btn btn-primary w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  disabled={!property}
                >
                  {t("contactWithUs")}
                </button>
              </div>
              <h5>{t("address")}</h5>
              <p className="meta" style={{ fontSize: "16px" }}>
                <Icon icon="mdi:location" style={{ fontSize: "20px" }} />{" "}
                {`${property?.data.gorod ? property?.data.gorod + ", " : ""}${property?.data.subrajon ? property?.data.subrajon + ", " : ""}${property?.data.mahallya ? property?.data.mahallya + ", " : ""}${property?.data.ulicza ? property?.data.ulicza + ", " : ""}`}
              </p>
              <h5>{t("description")}</h5>
              <p className="text-black-50" style={{ fontSize: "16px" }}>
                <Icon
                  icon="fluent:text-description-rtl-20-regular"
                  style={{ fontSize: "20px" }}
                />{" "}
                {property?.data.opisanie}
              </p>
              <h5>{t("objectParameters")}</h5>
              <div
                className="specs d-flex flex-wrap mb-4"
                style={{ fontSize: "16px" }}
              >
                <span className="d-block d-flex align-items-center me-3">
                  <Icon icon="tdesign:double-storey" className="me-2" />
                  <span className="caption">{`${property?.data.etazh ? property?.data.etazh + "-" + t("etazh") : t("notShown")}`}</span>
                </span>
                <span className="d-block d-flex align-items-center me-3">
                  <Icon icon="teenyicons:floorplan-outline" className="me-2" />
                  <span className="caption">{`${property?.data.kolichestvo_komnat ? property?.data.kolichestvo_komnat + " " + t("komnat") : t("notShown")}`}</span>
                </span>
                <span className="d-block d-flex align-items-center me-3">
                  <Icon icon="gis:measure-area" className="me-2" />
                  <span className="caption">{`${property?.data.obshhaya_ploshhad ? property?.data.obshhaya_ploshhad + "M²" : t("notShown")}`}</span>
                </span>
                <span className="d-block d-flex align-items-center me-3">
                  <Icon icon="material-symbols:apartment" className="me-2" />
                  <span className="caption">{`${property?.data.etazhnost ? property?.data.etazhnost + " " + t("etazhnost").toLocaleLowerCase() : t("notShown")}`}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h3>{t("relatedObjects")}</h3>
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
                      canSwipe={autoPlaySlide}
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
                    Prev
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
                    Next
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
