
import foto from "../../Helpers/assets/cpp.png";
import "./Card.scss";

const Card = function({name, image}) {
    return (
        <main className="foto-main">
            <div className="foto-div">
                <img className="image" src= {image} alt="" />
            </div>

            <div className="text-div">
                <h3 className="name" > {name} </h3>
            </div>
        </main>
    )
};

export default Card;