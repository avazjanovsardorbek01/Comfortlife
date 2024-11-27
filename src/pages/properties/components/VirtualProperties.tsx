import { useRef } from "react";
import ObjectCard from "../../../components/objectCard/ObjectCard";
import { IGetObjectResponse } from "../../../types/IGetObjectResponse";
import { AxiosResponse } from "axios";
import { For } from "million/react";

type Props = {
  data: AxiosResponse<IGetObjectResponse, any>;
};

function VirtualProperties({ data }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container">
      <div className="row" ref={parentRef}>
        <For each={data.data.data}>
          {(item, index) => (
            <div
              className="col-xs-12 col-sm-6 col-md-6 col-lg-4"
              key={item.$id}
            >
              <ObjectCard
                apartmentData={item}
                images={data?.data?.images?.[index]}
                className="mb-30"
              />
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default VirtualProperties;
