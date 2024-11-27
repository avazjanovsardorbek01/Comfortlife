import bgImg from "../../assets/comfortlife_2-min.webp";
import "./properties.scss";
import "../main/main.scss";
import FilterForm from "../../components/filterForm";
import { animateScroll as scroll } from "react-scroll";
import ModalForm from "../../components/modalFilter/ModalForm";
import { useEffect, useLayoutEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getObjectsVirtuoso } from "../../api/Requests";
import { useFilter } from "../../contexts/search-filter";
import Loading from "../../components/loading";
import VirtualProperties from "./components/VirtualProperties";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import noResult from "../../assets/no_results.png";
function Properties() {
  const [itemsList, setItemsList] = useState(2);
  const { filters } = useFilter();
  const { t } = useTranslation();
  const { data, refetch, isFetching } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["paginated_objects"],
    queryFn: async () => await getObjectsVirtuoso(filters),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  console.log({ data });
  useLayoutEffect(() => {
    scroll.scrollToTop();
  }, []);
  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, [filters]);
  useEffect(() => {
    if (!isFetching && data) {
      setItemsList(data?.data?.data?.length);
    }
    // eslint-disable-next-line
  }, [data]);
  return (
    <>
      <ModalForm offersFound={itemsList} target={""} />
      <div
        className="hero page-inner overlay"
        style={{ backgroundImage: `url('${bgImg}')` }}
      >
        <div className="container p-0 w-100">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center mt-5">
              <h1 className="heading" data-aos="fade-up">
                {t("properties")}
              </h1>

              <nav
                aria-label="breadcrumb"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <ol className="breadcrumb text-center justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">{t("home")}</Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-white-50"
                    aria-current="page"
                  >
                    {t("properties")}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container p-4">
          <h2 className="font-weight-bold text-primary heading mt-2 mb-4">
            {t("properties_filter")}
          </h2>
          <div className="row justify-content-center align-items-end p-0">
            <div className="col-lg-12 text-center">
              <FilterForm
                inputTitleStyle={{ color: "black" }}
                offersFound={itemsList}
                target={""}
              />
              {/*NOTE <form
                action="#"
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
                        >
                          Покупка
                        </button>
                        <button
                          type="button"
                          className="btn btn-disabled w-100 custom text-white"
                          style={{ backgroundColor: "#4F4E4E" }}
                        >
                          Аренда
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-1 w-100">
                    <div className="col-md-4">
                      <label
                        htmlFor="validationCustom02"
                        className="form-label  fs-6"
                      >
                        Категория объекта
                      </label>
                      <select
                        className="form-select rounded"
                        aria-label="Default select example"
                      >
                        <option value=""></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-4">
                      <label
                        htmlFor="validationCustomUsername"
                        className="form-label  fs-6"
                      >
                        Стоимость
                      </label>
                      <div className="input-group has-validation">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          <Icon icon="tabler:number" fontSize={18} />
                        </span>
                        <input
                          type="number"
                          className="form-control rounded"
                          id="validationCustomUsername"
                          aria-describedby="inputGroupPrepend"
                          placeholder="dan"
                          style={{ paddingLeft: "8px", paddingRight: "8px" }}
                        />
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
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
                          placeholder="gacha"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label
                        htmlFor="validationCustomUsername"
                        className="form-label  fs-6"
                      >
                        Общая площадь м²
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
                          style={{ paddingLeft: "8px", paddingRight: "8px" }}
                          placeholder="dan"
                        />
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          <Icon icon="tabler:number" fontSize={18} />
                        </span>
                        <input
                          type="number"
                          className="form-control rounded "
                          id="validationCustomUsername"
                          aria-describedby="inputGroupPrepend"
                          placeholder="gacha"
                          style={{
                            marginRight: 0,
                            paddingLeft: "8px",
                            paddingRight: "8px",
                          }}
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-1 w-100">
                    <div className="col-md-4">
                      <label
                        htmlFor="validationCustom02"
                        className="form-label  fs-6"
                      >
                        Район
                      </label>
                      <select
                        className="form-select rounded"
                        aria-label="Default select example"
                      >
                        <option value=""></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-4">
                      <label
                        htmlFor="validationCustom02"
                        className="form-label"
                      >
                        .
                      </label>
                      <div className="input-group" style={{ overflow: "auto" }}>
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                          data-bs-toggle="modal"
                          data-bs-target="#filterModal"
                          style={{
                            backgroundColor: "#4F4E4E",
                            color: "white",
                            margin: 0,
                            border: "none",
                            outline: "none",
                            cursor: "pointer",
                          }}
                        >
                          <Icon icon="mage:filter" fontSize={"20px"} />
                        </span>

                        <button
                          type="button"
                          className="form-control btn btn-light rounded text-truncate position-relative text-white"
                          style={{
                            marginRight: 0,
                            paddingLeft: "10px",
                            zIndex: 1000,
                            backgroundColor: "#956D57",
                          }}
                        >
                          Найденно предложений
                          <span
                            className="position-absolute top-0 start-10 translate-start badge rounded-pill bg-danger"
                            style={{
                              right: "10px",
                              fontSize: "12px",
                            }}
                          >
                            99+
                            <span className="visually-hidden">
                              unread messages
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
      <div className="section section-properties">
        {data?.data?.data && data?.data?.data.length > 0 && !isFetching ? (
          <VirtualProperties data={data} />
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
    </>
  );
}

export default Properties;
