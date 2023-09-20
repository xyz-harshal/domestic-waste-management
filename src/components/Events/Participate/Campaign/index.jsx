import EList from "../EList";
import "./index.css";
import campaign from "./campaign";
let PCampaign = () => {
    return (
        <section id="p-campaign">
            <div id="container">
                <div className="p-campaign-main flex flex-col">
                    <p className="p-c-head py-2">Glad to see you wanting to participate in Campaign.</p>
                    <p className="p-d-tail py-2">You will recieve 50 points for participating in Campaign.</p>
                    <div className="p-campaign-list flex flex-col gap-6">
                        {campaign.map((data=><EList data={data}/>))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PCampaign;