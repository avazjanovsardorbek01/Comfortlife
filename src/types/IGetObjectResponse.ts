import IApartmentRow from "./IApartmentDBService";
import { IFilterData } from "./IFilter";

export type IGetObjectResponse = {
  data: IApartmentRow[];
  images: string[][];
  requestBody: IFilterData;
};
