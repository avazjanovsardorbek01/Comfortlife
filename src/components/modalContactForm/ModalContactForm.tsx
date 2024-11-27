import { Icon } from "@iconify/react/dist/iconify.js";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import Loading from "../loading";
type Props = {
  // eslint-disable-next-line
  submitForm: UseMutateFunction<
    AxiosResponse<
      {
        status: string;
      },
      any
    >,
    Error,
    {
      telefon: string;
      fio: string;
      comment: string;
      status: "Холодный";
      source: ["С сайта (Прочее)"];
    },
    unknown
  >;
  status: "error" | "idle" | "pending" | "success";
  isLoading: boolean;
  response: boolean;
  index?: number | null;
};

const ModalContactForm = ({
  submitForm,
  isLoading,
  response,
  index,
  status,
}: Props) => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (index) {
      setMessage(t("objectContactMessage").replace("num", `${index}`));
    }
  }, [index, t]);
  return (
    <div
      className="modal fade"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      id="contactModal"
      style={{ padding: 0 }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm({
            fio: name,
            telefon: "+" + phone,
            comment: message,
            status: "Холодный",
          } as any);
        }}
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
            {isLoading ? (
              <Loading style={{ height: "300px" }} />
            ) : response ? (
              <div className="modal-body text-center">
                <Icon
                  icon="mdi:success-circle"
                  fontSize={"55px"}
                  color="green"
                />
                <h3>{t("success_comment")}</h3>
              </div>
            ) : status === "error" ? (
              <div className="modal-body text-center">
                <Icon icon="codicon:error" fontSize={"55px"} color="red" />
                <h3>{t("error_comment")}</h3>
              </div>
            ) : (
              <>
                <div className="modal-body">
                  <div className="input-label">{t("name")}</div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>

                  <div className="input-label">{t("phone")}</div>
                  <div className="input-group">
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
                  <div className="input-label">{t("comment")}</div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={!name || !message || !phone || phone.length < 7}
                  >
                    {t("send")}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalContactForm;
