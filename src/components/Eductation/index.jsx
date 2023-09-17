import EducationHeader from "./Header";
import "./index.css";
import LearnItem from "./Item";
import items from "./ItemData";

let Education = () => {
    console.log(items)
    return (
    <section id="Education">
        <div className="item-container-wrapper">
            <EducationHeader />
            {items.map((item) => (
                <>
                <LearnItem question={item.question} brief={item.brief} imgname={item.imgName} link={item.hyperlink} itemid={item.id} />
                </>
            ))}
        </div>
    </section>
    )
}
export default Education;
