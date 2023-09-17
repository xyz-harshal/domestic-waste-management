import ContentItems from "./content-items";
import "./index.css";

let Contents = () => {
    return (
        <section id="Contents" className="">
            <div id="container">
                <div className="flex flex-col gap-8 mt-20">
                    <ContentItems img="rallies.webp" head="Campaigns" body="Campaigns are basically an event organised by the authorities, so the people in the locality are aware about the the waste is affecting their society." tail="The motive of this event is to encourage people toward keeping their neighbourhood clean" tail1="We as an organisation have made a facility where an group or society can organize an campaings and host it in our platform so that many people join that campaign."  tail2="Those who wish to participate in such campaings and make a significant change in the society can join such campaigns."/>
                    <ContentItems img="drive.jpg" head="Drive" body="Campaigns are basically an event organised by the authorities, so the people in the locality are aware about the the waste is affecting their society." tail="The motive of this event is to encourage people toward keeping their neighbourhood clean" tail1="We as an organisation have made a facility where an group or society can organize an campaings and host it in our platform so that many people join that campaign."  tail2="Those who wish to participate in such campaings and make a significant change in the society can join such campaigns."/>
                    <ContentItems img="edu.png" head="Education" body="Campaigns are basically an event organised by the authorities, so the people in the locality are aware about the the waste is affecting their society." tail="The motive of this event is to encourage people toward keeping their neighbourhood clean" tail1="We as an organisation have made a facility where an group or society can organize an campaings and host it in our platform so that many people join that campaign."  tail2="Those who wish to participate in such campaings and make a significant change in the society can join such campaigns."/>
                    <ContentItems img="trash_tracker.png" gap=" gap-16 " head="Trash Tracker" body="Campaigns are basically an event organised by the authorities, so the people in the locality are aware about the the waste is affecting their society." tail="The motive of this event is to encourage people toward keeping their neighbourhood clean" tail1="We as an organisation have made a facility where an group or society can organize an campaings and host it in our platform so that many people join that campaign."  tail2="Those who wish to participate in such campaings and make a significant change in the society can join such campaigns."/>
                </div>
            </div>
        </section>
    )
}
export default Contents;