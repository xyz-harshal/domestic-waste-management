import "./index.css";
import EList from "../EList";
import drive from "./drive";
let PDrive = () => {
    return (
        <section id="p-drive">
            <div id="container">
                <div className="p-drive-main flex flex-col">
                    <p className="p-d-head py-6">Glad to see you wanting to participate in Drive.</p>
                    <div className="p-drive-list flex flex-col gap-6">
                        <EList data={drive[0]} />
                        <EList data={drive[1]} />
                    </div>
                </div>
            </div>
        </section>

    )
}
export default PDrive;