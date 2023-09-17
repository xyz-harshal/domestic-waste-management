import EList from "../EList";
import "./index.css";
import campaign from "./campaign";
let PCampaign = () => {
    return (
        <section id="p-campaign">
            <div id="container">
                <div className="p-campaign-main flex flex-col">
                    <p className="p-c-head py-6">Glad to see you wanting to participate in Campaign.</p>
                    <div className="p-campaign-list flex flex-col gap-6">
                        <EList data={campaign[0]}/>
                        <EList data={campaign[1]}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PCampaign;