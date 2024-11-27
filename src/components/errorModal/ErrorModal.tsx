import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Props = {
  buttonRef: React.RefObject<HTMLButtonElement>;
};

function ErrorModal({ buttonRef }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="btn btn-primary"
        style={{ display: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {t("error")}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <Icon icon="mdi:error-outline" fontSize={"55px"} color="orange" />
              <h3 style={{ margin: "0.5rem" }}>{t("error_message")}</h3>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary w-100"
                data-bs-dismiss="modal"
                onClick={() => navigate("/properties")}
              >
                {t("error_btn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorModal;
