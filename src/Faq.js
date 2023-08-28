/* eslint-disable prettier/prettier */

import catFaq from "./images/catFaq.png";
// import FaqList from "./FaqList";
import { useState } from "react";

const Faq = () => {
  const [faqs,setFaqs] = useState([{id:1, title:"When should I start applying to universities/colleges?", 
  body:"This is ideally done in the fall of your last year of high SpeechRecognitionResultList(senior year/Grade 12 year)"},
  {id:2, title:"When can I expect to hear back from schools?", 
  body:"This is dependent on each school and they will ususally have a 'Dates and Deadlines' page, and will usually let you know when first-round offers are being made (ie. Early December) or for some schools will be made in March."
  },{id:3, title:"What if I'm undecided about my major?", 
  body:"It is important to be starting about your financial situation early as college/university can be quite costly especially if you are going to live away from home (ie. going to an international school or moving to a different state)."
  },{id:4, title:"Should I apply for financial aid, and if so, how and when?", 
  body:"This is ideally done in the fall of your last year of high school (senior year/Grade 12 year)."
  }]);

  const [clicked,setClicked] = useState(false);

  const toggle = id => {
    if(clicked === id) {
      return setClicked(null)
    }
    setClicked(id)
  }

  return (
      <div className="border">
        <div className="faq-section">
          <img src={catFaq} className="catFaq" alt="bobaCat" />
          <h1>Frequently asked questions</h1>
          <div className="faq-preview">
            {faqs.map((faq) => (
                <div className ="faq-lists" key = {faq.id}>
                    <h2>{faq.title}
                    <button onClick={() => toggle(faq.id)}>View</button>
                    </h2>
                    {clicked === faq.id ? <p>{faq.body}</p> : <></>}
                </div>
            ))}
        </div>
        </div>
      </div>
  );
};

export default Faq;
