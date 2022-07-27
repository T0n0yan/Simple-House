import React, { useState } from "react";
import ListContainer from "../../Components/HomeListContainer";
import WelcomeTitle from "../../Components/welcomeTitle/index";
import { data } from "./data";
import "./style.scss";

const Home = () => {
  const pizza = data.filter((el) => el.type === "pizza");
  const noodle = data.filter((el) => el.type === "noodle");
  const salad = data.filter((el) => el.type === "salad");
  const [active, setActive] = useState(pizza);
  const [activeBtn, setActiveBtn] = useState(true);
  const [activeBtn1, setActiveBtn1] = useState(false);
  const [activeBtn2, setActiveBtn2] = useState(false);

  const pizzaFoo = () => {
    setActive(pizza);
    setActiveBtn(true);
    setActiveBtn1(false);
    setActiveBtn2(false);
  };
  const saladFoo = () => {
    setActive(salad);
    setActiveBtn(false);
    setActiveBtn1(true);
    setActiveBtn2(false);
  };
  const noodleFoo = () => {
    setActive(noodle);
    setActiveBtn(false);
    setActiveBtn1(false);
    setActiveBtn2(true);
  };

  return (
    <div className="G-Container">
      <div>
        <WelcomeTitle
          title="Welcome to Simple House"
          description="Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites"
        />

        <div className="buttons">
          <button
            className={activeBtn ? "active" : "disabled"}
            onClick={pizzaFoo}
          >
            Pizza
          </button>
          <button
            className={activeBtn1 ? "active" : "disabled"}
            onClick={saladFoo}
          >
            Salad
          </button>
          <button
            className={activeBtn2 ? "active" : "disabled"}
            onClick={noodleFoo}
          >
            Noodle
          </button>
        </div>

        <div className="postContainer">
          {active.map((el) => (
            <ListContainer food={el} />
          ))}
        </div>

        {/* <ItemDescription />
         */}

        <div className="mainContainer">
          <div className="leftSide"></div>
          <div className="rightSide">
            <h2> Maecenas nulla neque</h2>
            <span>
              Redistributing this template as a downloadable ZIP file on any
              template collection site is strictly prohibited. You will need to
              talk to us for additional permissions about our templates. Thank
              you.
            </span>
            <div className="button">
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
