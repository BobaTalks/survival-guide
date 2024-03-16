import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import '../../App.css';
import './Internship.css';
import { MainBox } from '../../components/MainBox';
import { Cookies } from '../../components/Cookies';
import { InternImage } from './InternImage';
import React from 'react';

const Internship = () => {
  return (
    <div className="bgPage container">
      <div className="sidebar">
        <Logo />
        <Menu />
      </div>

      <div className="mainBox ">
        <MainBox>
          <InternImage />
          <Cookies />

          <div className="recipe_container">
            <h2 className="recipe_header">Internships 101</h2>
            <div className="recipe_text">
              An internship is applied learning that is developed through short-term work experience that is offered by
              companies (of any size) and is usually directed towards students to allow them to get exposure to
              entry-level jobs.
            </div>

            <div className="recipe_text">
              The main goals of doing internships is to network to discover what kind of jobs are out there as well as
              the tasks/responsibilities that they do, learning how organizations work as well as learning more about
              that specific field of work and determining whether or not that is something you are interested in
              pursuing.
            </div>
            <div className="recipe_text">
              In contrast to popular belief, internships are NOT only limited to college/university students, rather
              there are lots of opportunities that are available for high school students, new graduates, individuals
              who have completed their degree several years ago, career changers as well as individuals who are
              returning to the workforce.
            </div>

            <h4 className="recipe_subHeader">Benefits of an Internship</h4>

            <div className="recipe_text">
              Some benefits of pursuing internships include the applied learning you get from education as well as being
              able to do some career exploration. It provides you with the opportunity to utilize what you have learned
              in class with real-world experiences, making it that much more valuable. Through internships, you can gain
              experiences and increase your confidence in your work as professional experiences are incredibly valuable
              to have on your resume and is something that many future employers will be looking for as you have insight
              into the professional workplace culture, employee relations and leadership (Maio, 2018).
            </div>
          </div>
        </MainBox>
      </div>
    </div>
  );
};

export default Internship;
