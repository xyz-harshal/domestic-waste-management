import "./index.css";

let Main = () => {
    return (
        <section id="Home">
            <div className="home">
                <img src={require("../../../img/modi_ji.jpg")} className="modi-img" />
                <div className="home-main">
                    <p className="home-main-head">Cleanliness is the key to survive.</p>
                    <p className="home-main-des" >This is a government based organization whichs helps people to keep their envirnoment clean. Where the people will be together to improve their neighbourhood.</p>
                </div>

            </div>


        </section>
    )
}
export default Main;