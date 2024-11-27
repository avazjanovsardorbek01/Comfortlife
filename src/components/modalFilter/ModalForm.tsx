import { Icon } from "@iconify/react/dist/iconify.js";
import { useFilter } from "../../contexts/search-filter";
import { useEffect, useState } from "react";
import { IFilterData } from "../../types/IFilter";
import useDebounce from "../../hooks/useDebounce";
import { useTranslation } from "react-i18next";
import { Link as Linking } from "react-scroll";
import {
  tip_nedvizhimosti_list,
  tip_planirovki_list,
  sostoyanie_remonta_list,
  naznachenie_obekta_list,
  subrajon_list,
} from "./list";

interface IModalForm {
  offersFound: number;
  target: string;
  priceVisible?: boolean;
}
//million-ignore
function ModalForm({ offersFound, target, priceVisible = true }: IModalForm) {
  const { t } = useTranslation();
  console.log(JSON.parse(t("tip_nedvizhimosti_list")));
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
    console.log("filters update");
  }, [filters]);
  useEffect(() => {
    saveFilters(bouncedValue);
    console.log({ filteration });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bouncedValue]);
  return (
    <div
      className="modal fade"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      id="filterModal"
      style={{ padding: 0 }}
    >
      <div
        className="modal-dialog modal-dialog-scrollable"
        style={{ maxWidth: "700px" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {t("filter")}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container p-0 w-100">
              <div className="row">
                <h5>{t("main_settings")}</h5>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6 pt-2 pb-2">
                  <label className="input-label">
                    {t("tip_nedvizhimosti")}
                  </label>
                  <div className="input-group">
                    <select
                      className="form-select"
                      value={
                        filteration.tip_nedvizhimosti ??
                        tip_nedvizhimosti_list[0]
                      }
                      onChange={(e) =>
                        setFilteration((pre) => {
                          return { ...pre, tip_nedvizhimosti: e.target.value };
                        })
                      }
                    >
                      {JSON.parse(t("tip_nedvizhimosti_list")).map(
                        (item: string, index: number) => {
                          return (
                            <option
                              value={tip_nedvizhimosti_list[index]}
                              key={item + index}
                            >
                              {item}
                            </option>
                          );
                        },
                      )}
                    </select>
                  </div>
                </div>
                {priceVisible && (
                  <div className="col-sm-6 pt-2 pb-2">
                    <label htmlFor="validationCustomUsername">
                      {t("price")}$
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
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6 pt-2 pb-2">
                  <label className="input-label">{t("subrajon")}</label>
                  <div className="input-group">
                    <select
                      className="form-select"
                      placeholder="tumanlar"
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
                            <option
                              value={subrajon_list[index]}
                              key={item + index}
                            >
                              {item}
                            </option>
                          );
                        },
                      )}
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 pt-2 pb-2">
                  <label htmlFor="validationCustomUsername">{t("space")}</label>
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
                      onChange={(e) =>
                        setFilteration((pre) => {
                          return {
                            ...pre,
                            obshhaya_ploshhad_ot: e.target.value,
                          };
                        })
                      }
                      value={filteration?.obshhaya_ploshhad_ot ?? ""}
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
                      placeholder={t("to")}
                      onChange={(e) =>
                        setFilteration((pre) => {
                          return {
                            ...pre,
                            obshhaya_ploshhad_do: e.target.value,
                          };
                        })
                      }
                      value={filteration?.obshhaya_ploshhad_do ?? ""}
                    />
                  </div>
                </div>
              </div>
              <div className="row dropdown-divider"></div>
              <div className="row">
                <h5>{t("room")}</h5>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6 pt-2 pb-2">
                  <label htmlFor="validationCustomUsername">{t("etazh")}</label>
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
                      value={filteration?.etazh_ot ?? ""}
                      onChange={(e) =>
                        setFilteration((pre) => {
                          return { ...pre, etazh_ot: e.target.value };
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
                      value={filteration?.etazh_do ?? ""}
                      onChange={(e) =>
                        setFilteration((pre) => {
                          return { ...pre, etazh_do: e.target.value };
                        })
                      }
                      placeholder={t("to")}
                    />
                  </div>
                </div>
                <div className="col-sm-6 pt-2 pb-2">
                  <label htmlFor="validationCustomUsername">
                    {t("etazhnost")}
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
                      value={filteration?.etazhnost_ot ?? ""}
                      onChange={(e) =>
                        setFilteration((pre) => {
                          return { ...pre, etazhnost_ot: e.target.value };
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
                      value={filteration?.etazhnost_do ?? ""}
                      onChange={(e) =>
                        setFilteration((pre) => {
                          return { ...pre, etazhnost_do: e.target.value };
                        })
                      }
                      placeholder={t("to")}
                    />
                  </div>
                </div>
              </div>
              <div className="row dropdown-divider"></div>
              <div className="row">
                <h5>{t("building_info")}</h5>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-12 pt-2 pb-2">
                  <label className="input-label">
                    {t("sostoyanie_remonta")}
                  </label>
                  <div className="input-group">
                    <select
                      className="form-select"
                      value={
                        filteration.sostoyanie_remonta ??
                        sostoyanie_remonta_list[0]
                      }
                      onChange={(e) =>
                        setFilteration((pre) => {
                          return { ...pre, sostoyanie_remonta: e.target.value };
                        })
                      }
                    >
                      {JSON.parse(t("sostoyanie_remonta_list")).map(
                        (item: string, index: number) => {
                          return (
                            <option
                              value={sostoyanie_remonta_list[index]}
                              key={item + index}
                            >
                              {item}
                            </option>
                          );
                        },
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6 pt-2 pb-2">
                  <label className="input-label">
                    {t("naznachenie_obekta")}
                  </label>
                  <div className="input-group">
                    <select
                      className="form-select"
                      value={
                        filteration.naznachenie_obekta ??
                        naznachenie_obekta_list[0]
                      }
                      onChange={(e) =>
                        setFilteration((pre) => {
                          return { ...pre, naznachenie_obekta: e.target.value };
                        })
                      }
                    >
                      {JSON.parse(t("naznachenie_obekta_list")).map(
                        (item: string, index: number) => {
                          return (
                            <option
                              key={item + index}
                              value={naznachenie_obekta_list[index]}
                            >
                              {item}
                            </option>
                          );
                        },
                      )}
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 pt-2 pb-2">
                  <label className="input-label">{t("tip_planirovki")}</label>
                  <div className="input-group">
                    <select
                      className="form-select"
                      value={
                        filteration.tip_planirovki ?? tip_planirovki_list[0]
                      }
                      onChange={(e) =>
                        setFilteration((pre) => {
                          return { ...pre, tip_planirovki: e.target.value };
                        })
                      }
                    >
                      {JSON.parse(t("tip_planirovki_list")).map(
                        (item: string, index: number) => {
                          return (
                            <option
                              key={item + index}
                              value={tip_planirovki_list[index]}
                            >
                              {item}
                            </option>
                          );
                        },
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row dropdown-divider"></div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="row justify-content-end gap-2">
              <button
                type="reset"
                className="btn btn-secondary rounded col-sm-5"
                data-bs-dismiss="modal"
                style={{ backgroundColor: "#956D57" }}
              >
                {t("clear")}
              </button>
              <Linking
                to={target}
                smooth
                spy
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-light rounded text-truncate position-relative col-sm-5"
                style={{
                  marginRight: 0,
                  paddingLeft: "10px",
                  zIndex: 1000,
                  backgroundColor: "#956D57",
                  color: "white",
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
                  <span className="visually-hidden">Найденно предложений</span>
                </span>
              </Linking>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
