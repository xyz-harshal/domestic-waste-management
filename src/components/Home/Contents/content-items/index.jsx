import "./index.css";
import {BsBoxArrowRight} from "react-icons/bs";
let ContentItems = ({data}) => {
    return (
        <div className={" content-item flex flex-row gap-5 p-5"}>
            <img src={require("../../../../img/" + data.img)} />
            <div className="cont-items-brief flex flex-col gap-2">
                <p className="content-head">{data.head}</p>
                <p className="content-para">{data.body}</p>
                <p className="content-para">{data.body1}</p>
                <p className="content-para">{data.body2}</p>
                <p className="content-para">{data.body3}</p>
                <a><BsBoxArrowRight color="#2FAF57" size={"1.65rem"} className="mt-2"/></a>
            </div>

        </div>
    )
}
export default ContentItems;