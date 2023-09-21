import ContentItems from "./content-items";
import "./index.css";
import homeContent from "./home-content.js";
let Contents = () => {
    return (
        <section id="Contents" className="">
            <div id="container">
                <div className="flex flex-col gap-8 mt-20">
                    {homeContent.map((data)=><ContentItems data={data} />)}
                </div>
            </div>
        </section>
    )
}
export default Contents;