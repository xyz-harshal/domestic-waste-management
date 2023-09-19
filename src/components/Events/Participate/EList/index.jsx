import "./index.css";
import { FaRegCalendarCheck } from "react-icons/fa";
import {BiTimeFive} from "react-icons/bi";
let EList = (props) => {
    return (
        <div className="clist flex flex-row gap-6 p-5">
            <div className="clist-img flex flex-col justify-center items-center gap-2">
                <FaRegCalendarCheck size={"1.5rem"} />
                <p>{props.data.date}</p>
                <p>{props.data.district}</p>
            </div>
            <div className="clist-details flex flex-row gap-10">
                <div className="flex flex-col clist-short-detail">
                    <p className="clist-item-head">{props.data.organizationName}</p>
                    <p>{props.data.agenda}</p>
                    <p>When: {props.data.date}</p>
                    <p>Where: {props.data.area}, {props.data.city}</p>
                    <p>Time: {props.data.time}</p>
                    
                </div>
                <div className="flex flex-col clist-more-detail">
                    <p>{props.data.briefing}</p>
                    <p style={{color:"red"}}><BiTimeFive style={{display:"inline",paddingRight:".4rem"}} size={"1.5rem"}/>Hurry up! only few seats left</p>
                    <button className="register-button p-2">Register Now</button>
                </div>
            </div>
        </div>
    )
}
export default EList;
