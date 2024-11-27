import React, { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import IApartmentRow from "../../types/IApartmentDBService";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useFilter } from "../../contexts/search-filter";
import noImg from "../../assets/no_img.png";
import "./objectCard.scss";
type IObjectCard = HTMLAttributes<HTMLDivElement> & {
  apartmentData: IApartmentRow;
  children?: React.ReactNode;
  images: string[];
};

function ObjectCard({
  apartmentData,
  images,
  className,
  children,
  ...attr
}: IObjectCard) {
  const { t } = useTranslation();
  const filters = useFilter();
  return (
    <Link to={"/property/" + apartmentData.$id}>
      <div
        {...attr}
        className={`property-item ${className}`}
        onClick={() => {
          localStorage.setItem(
            "data",
            JSON.stringify({ images, data: apartmentData }),
          );
        }}
      >
        {apartmentData?.naznachenie_obekta && (
          <span
            className="btn btn-primary position-absolute text-truncate top-1 left-5"
            style={{
              top: "10px",
              left: "10px",
              padding: "10px 20px",
              width: "auto",
              maxWidth: "50%",
            }}
          >
            {apartmentData?.naznachenie_obekta}
          </span>
        )}

        <span
          className="btn btn-primary position-absolute rounded text-truncate top-1 left-5 p-2"
          style={{
            top: "10px",
            right: "10px",
            padding: "10px 20px",
            width: "auto",
            maxWidth: "50%",
            backgroundColor:
              filters.filters.analyse_by === "Продажа"
                ? "rgb(0, 85, 85)"
                : "#956D57",
          }}
        >
          {filters.filters.analyse_by === "Продажа" ? t("sale") : t("rent")}
        </span>

        <img
          src={
            images?.[0]
              ? (import.meta.env.DEV
                  ? import.meta.env.VITE_APPWRITE_ENDPOINT
                  : window.location.origin) + images?.[0]
              : noImg
          }
          alt="Image"
          style={{
            height: "auto",
            width: "100%",
            maxWidth: "400px",
            aspectRatio: "1/1",
            pointerEvents: "none",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        <div className="property-content p-3 overflow-y-auto">
          <div className="price mb-2">
            <span>
              $
              {filters.filters.analyse_by === "Продажа"
                ? `${apartmentData.system_prod_price || apartmentData.system_prod_kom_price}`
                : `${apartmentData.system_rent_price || apartmentData.system_rent_kom_price}`}
            </span>
          </div>
          <div>
            <span className="d-block mb-2 text-black-50 text-truncate">
              <Icon icon="mdi:location" />{" "}
              {`${apartmentData.gorod ? apartmentData.gorod + ", " : ""}${apartmentData.subrajon ? apartmentData.subrajon + ", " : ""}${apartmentData.mahallya ? apartmentData.mahallya + ", " : ""}${apartmentData.ulicza ? apartmentData.ulicza + ", " : ""}`}
            </span>
            {apartmentData.zagolovok ? (
              <span className="city d-block mb-3 text-truncate">{`${apartmentData.zagolovok}`}</span>
            ) : (
              <span
                className="city d-block mb-3 text-truncate"
                style={{ color: "grey" }}
              >
                {t("ObjTitle") + " " + t("notShown")}
              </span>
            )}

            <div className="specs d-flex flex-wrap mb-4">
              <span className="d-block d-flex align-items-center me-3">
                <Icon icon="tdesign:double-storey" className="me-2" />
                <span className="caption">{`${apartmentData.etazh ? apartmentData.etazh + "-" + t("etazh") : t("notShown")}`}</span>
              </span>
              <span className="d-block d-flex align-items-center me-3">
                <Icon icon="teenyicons:floorplan-outline" className="me-2" />
                <span className="caption">{`${apartmentData.kolichestvo_komnat ? apartmentData.kolichestvo_komnat + " " + t("komnat") : t("notShown")}`}</span>
              </span>
              <span className="d-block d-flex align-items-center me-3">
                <Icon icon="gis:measure-area" className="me-2" />
                <span className="caption">{`${apartmentData.obshhaya_ploshhad ? apartmentData.obshhaya_ploshhad + "M²" : t("notShown")}`}</span>
              </span>
            </div>

            <Link
              className="btn btn-primary py-2 px-3"
              to={"/property/" + apartmentData.$id}
            >
              {t("see_details")}
            </Link>
          </div>
        </div>
        {children}
      </div>
    </Link>
  );
}

export default ObjectCard;
