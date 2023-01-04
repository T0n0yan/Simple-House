import React from "react";
import WelcomeTitle from "./../../Components/welcomeTitle/index";
import "./style.scss";
import FaqsItems from "../../Components/faqsItems";

const Contact = () => {
  return (
    <div className="G-Contaioner">
      <WelcomeTitle
        title="Contact Page"
        description="You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template."
      />

      <div className="G-Container  contactContainer">
        <div className="inputs">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <div className="contactBtn">
            <button>Send</button>
          </div>
        </div>

        <div className="contactInfo">
          <span className="ourAddres"> Our Address</span>
          <span className="addresDescription">
            180 Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus 10550
          </span>
          <div className="tel">
            <div className="icon-phone" />
            <span>080-090-0110</span>
          </div>
          <div className="email">
            <div className="icon-message" />
            <span>info@company.co</span>
          </div>

          <div className="contactIcons">
            <a href="https://www.facebook.com/" target="_blank">
              <div className="icon-facebook" />
            </a>
            <a className="twit" href="https://twitter.com/" target="_blank">
              <div className="icon-twitter" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <div className="icon-instagram" />
            </a>
          </div>
        </div>
      </div>

      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d194514.82302500436!2d45.420922000378546!3d40.38017375629751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shy!2s!4v1672866492630!5m2!1shy!2s"
        width="100%"
        height="550"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="G-Container">
        <div className="faq">
          <h2>FAQs</h2>
          <span>
            This section comes with Accordion tabs for different questions and
            answers about Simple House HTML CSS template. Thank you.
          </span>
        </div>
      </div>
      <div className="faqsItemsContainer">
        <FaqsItems
          title="1. Fusce eu lorem et dui #09C maximus varius?"
          description="#112 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat."
        />
        <FaqsItems
          title="2. Vestibulum #999 ante ipsum primis in faucibus orci?"
          description="Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta."
        />
        <FaqsItems
          title="3. Can I redistribute this template as a ZIP file?"
          description="ssssssssss"
        />
        <FaqsItems
          title="4. Ut ac erat sit amet neque efficitur faucibus et in lectus?"
          description="Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim."
        />
      </div>
    </div>
  );
};

export default Contact;
