import { CSSProperties } from "react";
import "./loading.scss";
const Loading = ({ style }: { style?: CSSProperties }) => {
  return (
    <div className="loader-wrap" style={style}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
