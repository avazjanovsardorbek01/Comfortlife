import { Icon } from "@iconify/react/dist/iconify.js";
import "./quickContact.scss";
import ModalContactForm from "../modalContactForm";
import { useMutation } from "@tanstack/react-query";
import { postContact } from "../../api/Requests";
import { useTranslation } from "react-i18next";

function QuickContact() {
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
  const { t } = useTranslation();
  return (
    <>
      <ModalContactForm
        submitForm={mutate}
        isLoading={isPending}
        response={isSuccess}
        status={status}
      />
      <div className="quickContact">
        <div className="wrap">
          <button data-bs-toggle="modal" data-bs-target="#contactModal">
            <Icon icon="icon-park-outline:communication" />
            <span style={{ marginLeft: "5px", fontSize: "13px" }}>
              {t("contactWithUs")}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default QuickContact;
