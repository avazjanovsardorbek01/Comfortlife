import { createContext, useContext, useState } from "react";
import {
  FilterContextProps,
  FilterContextValue,
  IFilterData,
} from "../types/IFilter";

const initialFilters: IFilterData = {
  analyse_by: "Продажа",
  price_by: "Рыночная цена",
  kategoriya_obekta: "Жилая",
};
const FilterContext = createContext<FilterContextValue>({
  filters: initialFilters,
  saveFilters: () => {},
});

function FilterProvider(props: FilterContextProps) {
  const [filters, setFilters] = useState<IFilterData>(initialFilters);

  const saveFilters = (filterData: IFilterData): void => {
    setFilters(filterData);
  };
  return (
    <FilterContext.Provider value={{ filters, saveFilters }}>
      {props.children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);
export default FilterProvider;
