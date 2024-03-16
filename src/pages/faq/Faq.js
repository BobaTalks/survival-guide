import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import catFaq from '../../images/catFaq.png';
import './Faq.css';
import { faqs } from './faqs';
import ReactMarkdown from 'react-markdown';

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };

  return (
    <>
    <div className="border">
      <div className="faq-section">
        <img src={catFaq} className="catFaq" alt="bobaCat" />
        <h1>Frequently asked questions</h1>
        <div className="faq-preview">
          {faqs.map((faq) => (
            <div className="faq-main" key={faq.id}>
              <div className="question">
                <button className="toggleFaq" onClick={() => toggle(faq.id)}>
                  <h2>{faq.title}</h2>
                  <FontAwesomeIcon
                    icon={clicked === faq.id ? faChevronUp : faChevronDown}
                    style={{ color: '#fae9d3' }}
                    className="chevron"
                  />
                </button>
              </div>
              <div className="answers">
                <p>{clicked === faq.id ? <ReactMarkdown>{faq.body}</ReactMarkdown> : null}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Faq;
