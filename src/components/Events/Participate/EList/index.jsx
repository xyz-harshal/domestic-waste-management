import "./index.css";
import { FaRegCalendarCheck } from "react-icons/fa";
import {BiTimeFive} from "react-icons/bi";
import {useState} from "react";
let EList = (props) => {
    let [toggle,setToggle]=useState(false);
    return (
        <div className="clist flex flex-row gap-6 p-5">
            <div className="clist-img flex flex-col justify-center items-center gap-2">
                <FaRegCalendarCheck size={"1.5rem"} />
                <p>{props.data.date}</p>
                <p>{props.data.district}</p>
            </div>
            <div className="clist-details flex flex-row gap-8">
                <div className="flex flex-col clist-short-detail p-3">
                    <p className="clist-item-head">{props.data.name}</p>
                    <p>{props.data.agenda}</p>
                    <p>When: {props.data.date}</p>
                    <p>Where: {props.data.area}, {props.data.city}</p>
                    <p>Time: {props.data.time}</p>
                    
                </div>
                <div className="flex flex-col clist-more-detail">
                    <p>{props.data.brief}</p>
                    <p style={{color:"red"}}><BiTimeFive style={{display:"inline",paddingRight:".4rem"}} size={"1.5rem"}/>Hurry up! registeration closes soon.</p>
                    <button className="register-button p-2" onClick={()=>{setToggle(!toggle)}}>{toggle?"Registeration done!!":"Register Now"}</button>
                </div>
            </div>
        </div>
    )
}
export default EList;