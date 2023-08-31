import { faqs } from "./Data";
import catFaq from "./images/catFaq.png";
// import FaqList from "./FaqList";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };

  return (
    <div className="border">
      <div className="faq-section">
        <img src={catFaq} className="catFaq" alt="bobaCat" />
        <h1>Frequently asked questions</h1>
        <div className="faq-preview">
          {faqs.map((faq) => (
            <div className="faq-lists" key={faq.id}>
              <h2>
                {faq.title}
                <button className="chevron" onClick={() => toggle(faq.id)}>
                  {/* <FontAwesomeIcon 
                        // icon = {clicked === faq.id ? {faChevronDown}: {faChevronUp}}
                        icon = {clicked === faq.id? {faChevronDown} : {faChevronUp}}
                        style={{ color: "#fae9d3" }}
                      /> */}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ color: "#fae9d3" }}
                  />
                </button>
              </h2>
              {clicked === faq.id ? <p>{faq.body}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
