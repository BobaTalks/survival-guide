/* eslint-disable prettier/prettier */

import catFaq from "./images/catFaq.png";
// import FaqList from "./FaqList";
import { useState } from "react";

const Faq = () => {
  const [faqs,setFaqs] = useState([{id:1, title:"When should I start applying to universities/colleges?", 
  body:"This is ideally done in the fall of your last year of high SpeechRecognitionResultList(senior year/Grade 12 year). The date applications typically vary by schools but its best to expect them around the end of the Summer (ie. Early August) or the beginning of the fall (ie. Early October) and may have two deadline dates (one for early admissions and the other for general). It is best to start early and plan ahead to ensure that you do not miss a deadline."},
  {id:2, title:"When can I expect to hear back from schools?", 
  body:"This is dependent on each school and they will ususally have a 'Dates and Deadlines' page, and will usually let you know when first-round offers are being made (ie. Early December) or for some schools will be made in March. There is really no set timeframe of when you should expect to hear back as each school is different so it's best to sit tight!"
  },{id:3, title:"What if I'm undecided about my major?", 
  body:"It is important to be starting about your financial situation early as college/university can be quite costly especially if you are going to live away from home (ie. going to an international school or moving to a different state). Everyone's situation is different, so its best to discuss your financial situation with your family or a school counselor to make the best decision. You could even start applying before you receive your acceptance letter but do note that you have to be enrolled at a school before being able to receive the funds (Staub, 2022). For more information on financial aid and different types of financial aid, refer to our article (See Financial Aid).\n Staub, M.(2022, December 22). Should I Apply for Financial Aid After I Get Accepted or Before? College Raptor. https://www.collegeraptor.com/paying-for-college/articles/financial-aid/should-i-apply-for-financial-aid-after-i-get-accepted-or-before/"
  },{id:4, title:"Should I apply for financial aid, and if so, how and when?", 
  body:"This is ideally done in the fall of your last year of high school (senior year/Grade 12 year). The date applications typically vary by schools but it is best to expect them around the end of the Summer (ie. Early August) or the beginning of the fall (ie. Early October) and may have two deadline dates (one for early admissions and the other for general). It is best to start early and plan ahead to ensure that you do not miss a deadline."
  },{id:5, title:"When should I purchase textbooks?",
  body: "Most courses will require you to purchase textbooks, it is best to hold off doing so far at least the first week until you are certain that you will be taking the course. As the first week is ususally the 'shopping around' period, where you still have the ability to drop/add courses. Textbooks can get quite pricey and while they are a beneficial learning tool, it is best to determine whether or not you will really need the material. You can also consider cheaper alternatives such as purchasing the textbook second-hand from another student or purchasing the e-text rather than purchasing it new from the school bookstore. These are all options that you shoud consider before diving into a decision."
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
