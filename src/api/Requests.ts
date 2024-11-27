import axios from "axios";
import { IFilterData } from "../types/IFilter";
import { IGetObjectResponse } from "../types/IGetObjectResponse";

const url = new URL("", window.location.origin);
export const basePath: string = url.toString();

const apiClient = axios.create({
  baseURL: import.meta.env.DEV ? "http://localhost:8080" : basePath,
  headers: {
    "Content-type": "application/json",
  },
});

export const getObjects = async (filter: IFilterData) => {
  const data = await apiClient.post<IGetObjectResponse>(`/api/server`, {
    filter,
  });
  return data;
};

export const getObjectsVirtuoso = async (filter: IFilterData) => {
  const data = await apiClient.post<IGetObjectResponse>(
    `/api/server/virtuoso`,
    {
      filter,
    },
  );
  return data;
};

export const getObject = async (id: string) => {
  const data = await apiClient.post<IGetObjectResponse>(`api/server/object`, {
    id,
  });
  return data;
};
export const postContact = async (postData: {
  comment: string;
  telefon: string;
  fio: string;
  status: "Холодный";
  source: string[];
}) => {
  const data = await apiClient.post<{ status: string }>(
    "/api/funnel",
    postData,
  );
  return data;
};
