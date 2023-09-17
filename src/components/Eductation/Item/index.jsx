import "./index.css";

let LearnItem = (props) => {
    return (
    <section id="Learn-Item">
        <div class="item-container">
            <div class="item-image">
                <img src={require(`../../../img/${props.imgname}`)} alt="Item Image"/>
            </div>
            <div class="item-content">
                <h2> {props.question} </h2>
                <p> {props.brief} </p>
                <a href={props.link} class="view-more-link">View more</a>
            </div>
        </div>
    </section>
    )
}
export default LearnItem;