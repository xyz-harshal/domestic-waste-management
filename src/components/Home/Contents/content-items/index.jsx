import "./index.css";
import {BsBoxArrowRight} from "react-icons/bs";
let ContentItems = (props) => {
    return (
        <div className={props.gap+" content-item flex flex-row gap-5 p-5"}>
            <img src={require("../../../../img/" + props.img)} />
            <div className="cont-items-brief flex flex-col gap-2">
                <p className="content-head">{props.head}</p>
                <p className="content-para">{props.body}</p>
                <p className="content-para">{props.tail}</p>
                <p className="content-para">{props.tail1}</p>
                <p className="content-para">{props.tail2}</p>
                <a><BsBoxArrowRight color="#2FAF57" size={"1.5rem"}/></a>
            </div>

        </div>
    )
}
export default ContentItems;