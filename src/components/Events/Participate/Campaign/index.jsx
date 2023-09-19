import EList from "../EList";
import "./index.css";
import { useEffect, useState } from "react";
let PCampaign = () => {
    const [campaigns, setCampaigns] = useState(null)

    useEffect(() => {

        const fetchCampaigns = async () => {
            const response = await fetch('/api/campaign')
            const json = await response.json()

            if(response.ok){
                setCampaigns(json)
            }
        }
        // console.log(campaigns)
        fetchCampaigns()
    }, [])
    
    
    return (
        <section id="p-campaign">
            <div id="container">
                <div className="p-campaign-main flex flex-col">
                    <p className="p-c-head py-6">Glad to see you wanting to participate in Campaign.</p>
                    <div className="p-campaign-list flex flex-col gap-6">
                        {campaigns && campaigns.map((campaign)=>(
                            <EList data={campaign}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PCampaign;
