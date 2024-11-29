import { CSSProperties, useEffect, useState } from "react";
import { useFilter } from "../../contexts/search-filter";
import { IFilterData } from "../../types/IFilter";
import useDebounce from "../../hooks/useDebounce";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import { subrajon_list, kategoriya_obekta_list } from "./list";
import { Link as Linking } from "react-scroll";
import "./FilterForm.scss";
interface IFilterForm {
  inputTitleStyle?: CSSProperties;
  offersFound: number;
  target: string;
  priceVisible?: boolean;
}
// million-ignore
function FilterForm({
  inputTitleStyle,
  offersFound,
  target,
  priceVisible = true,
}: IFilterForm) {
  const { t } = useTranslation();
  const { filters, saveFilters } = useFilter();
  const [offersState, setOffersState] = useState(offersFound);
  const [filteration, setFilteration] = useState<IFilterData>({
    ...filters,
  });
  const bouncedValue = useDebounce(filteration, 1500) as IFilterData;
  useEffect(() => {
    setOffersState(offersFound);
  }, [offersFound]);
  useEffect(() => {
    setFilteration(filters);
  }, [filters]);
  useEffect(() => {
    saveFilters(bouncedValue);
    console.log({ filteration });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bouncedValue]);
  return (
    <>
      <form
        className="form-search m-auto d-flex align-items-stretch col-lg-10 w-100"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="w-100 d-flex flex-column align-items-center">
          <div className="d-flex row justify-content-center mb-1 w-100">
            <div className="col w-100">
              <div
                className="btn-group w-100"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-primary w-100 active custom"
                  onClick={() =>
                    setFilteration((pre) => {
                      return { ...pre, analyse_by: "Продажа" };
                    })
                  }
                  style={{
                    backgroundColor:
                      filteration.analyse_by === "Продажа"
                        ? "#956D57"
                        : "#4F4E4E",
                  }}
                >
                  {t("sale")}
                </button>
                <button
                  type="button"
                  className="btn btn-disabled w-100 custom"
                  onClick={() =>
                    setFilteration((pre) => {
                      return { ...pre, analyse_by: "Аренда" };
                    })
                  }
                  style={{
                    backgroundColor:
                      filteration.analyse_by === "Аренда"
                        ? "#956D57"
                        : "#4F4E4E",
                    color: "white",
                  }}
                >
                  {t("rent")}
                </button>
              </div>
            </div>
          </div>
          <div className="row mb-1 w-100">
            <div className="col-md-4">
              <label
                htmlFor="validationCustom02"
                className="form-label fs-6"
                style={inputTitleStyle}
              >
                {t("kategoriya_obekta")}
              </label>
              <select
                className="form-select rounded"
                aria-label="Default select example"
                value={
                  filteration.kategoriya_obekta ?? kategoriya_obekta_list[0]
                }
                onChange={(e) =>
                  setFilteration((pre) => {
                    return { ...pre, kategoriya_obekta: e.target.value };
                  })
                }
              >
                {JSON.parse(t("kategoriya_obekta_list")).map(
                  (item: string, index: number) => {
                    return (
                      <option
                        value={kategoriya_obekta_list[index]}
                        key={item + index}
                      >
                        {item}
                      </option>
                    );
                  },
                )}
              </select>
            </div>
            {priceVisible && (
              <div className="col-md-4">
                <label
                  htmlFor="validationCustomUsername"
                  className="form-label fs-6"
                  style={inputTitleStyle}
                >
                  {t("price")} $
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <Icon icon="tabler:number" fontSize={18} />
                  </span>
                  <input
                    type="number"
                    className="form-control rounded"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    placeholder={t("from")}
                    value={filteration?.price_ot ?? ""}
                    onChange={(e) =>
                      setFilteration((pre) => {
                        return { ...pre, price_ot: e.target.value };
                      })
                    }
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  />
                  <span className="input-group-text" id="inputGroupPrepend">
                    <Icon icon="tabler:number" fontSize={18} />
                  </span>
                  <input
                    type="number"
                    className="form-control rounded"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      marginRight: "0",
                    }}
                    value={filteration?.price_do ?? ""}
                    onChange={(e) =>
                      setFilteration((pre) => {
                        return { ...pre, price_do: e.target.value };
                      })
                    }
                    placeholder={t("to")}
                  />
                </div>
              </div>
            )}
            {!priceVisible && (
              <div className="col-md-4">
                <label
                  htmlFor="validationCustom02"
                  className="form-label fs-6"
                  style={inputTitleStyle}
                >
                  {t("subrajon")}
                </label>
                <select
                  className="form-select rounded"
                  aria-label="Default select example"
                  value={filteration.subrajon ?? subrajon_list[0]}
                  onChange={(e) =>
                    setFilteration((pre) => {
                      return { ...pre, subrajon: e.target.value };
                    })
                  }
                >
                  {JSON.parse(t("subrajon_list")).map(
                    (item: string, index: number) => {
                      return (
                        <option value={subrajon_list[index]} key={item + index}>
                          {item}
                        </option>
                      );
                    },
                  )}
                </select>
              </div>
            )}
            <div className="col-md-4">
              <label
                htmlFor="validationCustomUsername"
                className="form-label fs-6"
                style={inputTitleStyle}
              >
                {t("space")}
              </label>
              <div className="input-group has-validation">
                <span
                  className="input-group-text text-truncate"
                  id="inputGroupPrepend"
                >
                  <Icon icon="tabler:number" fontSize={18} />
                </span>
                <input
                  type="number"
                  className="form-control rounded "
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  onChange={(e) =>
                    setFilteration((pre) => {
                      return { ...pre, obshhaya_ploshhad_ot: e.target.value };
                    })
                  }
                  value={filteration?.obshhaya_ploshhad_ot ?? ""}
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  placeholder={t("from")}
                />
                <span className="input-group-text" id="inputGroupPrepend">
                  <Icon icon="tabler:number" fontSize={18} />
                </span>
                <input
                  type="number"
                  className="form-control rounded "
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder={t("to")}
                  onChange={(e) =>
                    setFilteration((pre) => {
                      return { ...pre, obshhaya_ploshhad_do: e.target.value };
                    })
                  }
                  value={filteration?.obshhaya_ploshhad_do ?? ""}
                  style={{
                    marginRight: 0,
                    paddingLeft: "8px",
                    paddingRight: "8px",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className={
              !priceVisible
                ? "row justify-content-center mb-1 w-100"
                : "row mb-1 w-100"
            }
          >
            {priceVisible && (
              <div className="col-md-4">
                <label
                  htmlFor="validationCustom02"
                  className="form-label fs-6"
                  style={inputTitleStyle}
                >
                  {t("subrajon")}
                </label>
                <select
                  className="form-select rounded"
                  aria-label="Default select example"
                  value={filteration.subrajon ?? subrajon_list[0]}
                  onChange={(e) =>
                    setFilteration((pre) => {
                      return { ...pre, subrajon: e.target.value };
                    })
                  }
                >
                  {JSON.parse(t("subrajon_list")).map(
                    (item: string, index: number) => {
                      return (
                        <option value={subrajon_list[index]} key={item + index}>
                          {item}
                        </option>
                      );
                    },
                  )}
                </select>
              </div>
            )}
            <div className="col-md-4">
              <label
                htmlFor="validationCustom02"
                className="form-label"
                style={{ opacity: 0 }}
              >
                .
              </label>
              <div style={{ overflow: "auto", display: "flex" }}>
                <span
                  className="input-group-text"
                  id="inputGroupPrepend"
                  data-bs-toggle="modal"
                  data-bs-target="#filterModal"
                  style={{
                    backgroundColor: "#956D57",
                    color: "white",
                    margin: 0,
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    width: "43px",
                  }}
                >
                  <Icon icon="mage:filter" fontSize={"20px"} />
                </span>

                <Linking
                  to={target}
                  smooth
                  spy
                  type="button"
                  className="form-control btn btn-light rounded text-truncate position-relative"
                  style={{
                    marginRight: 0,
                    paddingLeft: "10px",
                    zIndex: 1000,
                    backgroundColor: "#956D57",
                    color: "white",
                    width: "100%",
                  }}
                >
                  {t("offer")}
                  <span
                    className="position-absolute top-0 start-10 translate-start badge rounded-pill bg-danger"
                    style={{
                      right: "10px",
                      fontSize: "12px",
                    }}
                  >
                    {offersState > 9 ? "9+" : offersState}
                    <span className="visually-hidden">{t("offer")}</span>
                  </span>
                </Linking>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default FilterForm;
