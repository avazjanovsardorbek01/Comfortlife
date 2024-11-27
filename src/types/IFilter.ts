type Value = any;

export type AnalyseBy = "Продажа" | "Аренда";
export type PriceBy = "Рыночная цена" | "м2";

export interface ISingle {
  singleBool: boolean;
  id: string | null;
}
export interface IFilterData {
  analyse_by: AnalyseBy;
  price_by: PriceBy;
  [key: string]: Value;
}

export interface FilterContextValue {
  filters: IFilterData;
  //eslint-disable-next-line
  saveFilters: (update: IFilterData) => void;
}

export interface FilterContextProps {
  children?: React.ReactNode;
}
