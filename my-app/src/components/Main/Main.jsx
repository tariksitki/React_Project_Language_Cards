import "./main.scss";
import { categories as data } from "../../Helpers/data.js";
import Card from "../Card/Card";

const Main = () => {
  console.log(data);
  return (
    <main className="main">
      <div className="header-div">
        <h1>Languages</h1>
      </div>

      <section className="cards">
        {data.map((item, index) => {
          const { img, name } = item;
          return <Card image={img} name={name} key={index} />;
        })}
      </section>
    </main>
  );
};

export default Main;
