import React from "react";
import WelcomeTitle from "../../Components/welcomeTitle";
import "./style.scss";
import StaffContainer from "./Pages/Staff";
import info from "./Pages/Staff/info";
import Types from "./Pages/Types";
import { types } from "./Pages/Types/type";

const About = () => {
  return (
    <div className="G-Container">
      <WelcomeTitle
        className="G-titleContainer "
        title="About Simple House"
        description="This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect."
      />
      <div className="staffContainer">
        {info.map((el, id) => {
          return <StaffContainer key={id} information={el} />;
        })}
      </div>

      <div
        className="G-Container backgroundImg"
        style={{ backgroundImage: `url(/img/download.png)` }}
      ></div>

      <div className="G-Container ">
        <div className="typesCont">
          {types.map((el, id) => {
            return <Types typesItems={el} key={id} />;
          })}
        </div>
      </div>

      <div className="G-Container History">
        <div className="g-backgroundimg historyImg"></div>

        <div className="desc">
          <h2 className="title">History of our restaurant</h2>
          <span>
            Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit
            amet justo. Maecenas posuere lorem id augue interdum vehicula.
            Praesent sed leo eget libero ultricies congue.
          </span><br/>
          <span>
            Redistributing this template as a downloadable ZIP file on any
            template collection site is strictly prohibited. You will need to
            <a href="https://templatemo.com/contact" target="_blank">
              contact TemplateMo
            </a>
            for additional permissions about our templates. Thank you.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
