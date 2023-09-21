import "./index.css";
import EList from "../EList";
import drive from "./drive";
let PDrive = () => {
    return (
        <section id="p-drive">
            <div id="container">
                <div className="p-drive-main flex flex-col">
                    <p className="p-d-head py-2">Glad to see you wanting to participate in Drive.</p>
                    <p className="p-d-tail py-2">You will recieve 50 points for participating in Drive.</p>
                    <div className="p-drive-list flex flex-col gap-6">
                    {drive.map((data=><EList data={data}/>))}
                    </div>
                </div>
            </div>
        </section>

    )
}
export default PDrive;