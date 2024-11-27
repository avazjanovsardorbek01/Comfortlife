import bgImg from "../../assets/comfortlife_5-min.webp";
import { animateScroll as scroll } from "react-scroll";
import "./contact.scss";
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import { useMutation } from "@tanstack/react-query";
import { postContact } from "../../api/Requests";
import Loading from "../../components/loading";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const { t } = useTranslation();
  const { isSuccess, isPending, mutate } = useMutation({
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
  useLayoutEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <div
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        id="contactModalResult"
        style={{ padding: 0 }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {t("contact")}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {isPending ? (
              <Loading style={{ height: "300px" }} />
            ) : isSuccess ? (
              <div className="modal-body text-center">
                <Icon
                  icon="mdi:success-circle"
                  fontSize={"55px"}
                  color="green"
                />
                <h3>{t("success_comment")}</h3>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div
        className="hero page-inner overlay"
        style={{ backgroundImage: `url('${bgImg}')` }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center mt-5">
              <h1 className="heading" data-aos="fade-up">
                {t("contact")}
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
                    {t("contact")}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 mb-5 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="contact-info">
                <div className="address mt-2">
                  <i className="icon-room"></i>
                  <h4 className="mb-2">{t("location")}</h4>
                  <p>{t("location_value")}</p>
                </div>

                <div className="open-hours mt-4">
                  <i className="icon-clock-o"></i>
                  <h4 className="mb-2">{t("open_hours")}</h4>
                  <p>{t("open_hours_value")}</p>
                </div>

                <div className="email mt-4">
                  <i className="icon-envelope"></i>
                  <h4 className="mb-2">{t("email")}</h4>
                  <p>{import.meta.env.VITE_EMAIL_URL}</p>
                </div>

                <div className="phone mt-4">
                  <i className="icon-phone"></i>
                  <h4 className="mb-2">{t("call")}</h4>
                  <p>{import.meta.env.VITE_TELEFON_URL}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  mutate({
                    fio: name,
                    telefon: "+" + phone,
                    comment,
                    status: "Холодный",
                    source: ["С сайта (Прочее)"],
                  });
                }}
              >
                <div className="row">
                  <div className="col-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("name")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <PhoneInput
                      country={"uz"}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      containerClass="form-control p-0"
                      inputClass="form-control h-100"
                      inputStyle={
                        window.innerWidth > 770
                          ? { width: "100%" }
                          : {
                              width: "calc(100% - 49px)",
                              marginLeft: "49px",
                            }
                      }
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      cols={30}
                      rows={7}
                      className="form-control"
                      placeholder={t("comment")}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!name || !phone || phone.length < 7}
                      data-bs-toggle="modal"
                      data-bs-target="#contactModalResult"
                    >
                      {t("send")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
