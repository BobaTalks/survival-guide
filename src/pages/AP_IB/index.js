import './App.css';
import { Cookies } from '../../components/Cookies';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';

const APIB = () => {
  return (
    <div className="bgPage container">
      <div className="sidebar">
        <Logo />
        <Menu />
      </div>

      <div className="mainBox ">
        <div className="recipe recipe_scroll">
          <Cookies />

          <div>
            <h2 className="recipe_header">AP vs IB vs College Classes</h2>
            <div className="recipe_text">
              So what is the difference between AP vs IB classes? What does it mean if I take college classes while I am
              still in high school? These are all possible questions that you have had or are currently wondering about.
              Especially with the looming idea of wondering about your prospective university choices and what the
              future may hold for you.
            </div>

            <h4 className="recipe_subHeader">Advanced Placement (AP)</h4>

            <div className="recipe_text">
              With AP classes that have an exam and course guidelines that have been administered by the College Board.
              Which means by taking AP courses and taking the exam you can save time and money, by waiving General
              Education and pre-requisite classes and credits in college depending on the score you received.
            </div>
            <div className="recipe_text">
              This is also applicable with universities, but each school has a different policy so you may only be given
              credits or have classes waived if you scored a minimum of 3 or greater on the exam (the scale is out of
              5). However, this does not mean that you should be stacking yourself with AP classes when you are in high
              school or that if your school doesn’t offer many AP classes, that you will be penalized in comparison to
              students from schools that offer lots of AP classes.
            </div>
            <div className="recipe_text">
              Institutions like to see that you are challenging yourself and taking advantage of the resources that are
              available to you but that does not mean AP classes are the only way to do so. In order to do well on these
              exams, it is best that you familiarize yourself with the exam sections and formatting by reading the
              College Board’s exam breakdowns as well as taking section and full-length practice exams that can be found
              on the College Board’s website (AP Student, n.d.).
            </div>

            <h6 className="recipe_bold">A Non-Exhaustive AP Exam Resource List (Free) Subheading</h6>
            <div style={{ margin: '15px' }}>
              <ul className="recipe_list">
                <li>https://library.fiveable.me/ (all)</li>
                <li>https://www.youtube.com/c/SteveHeimler?app=desktop (for AP History classes)</li>
                <li>College Board: AP Daily, AP Classroom</li>
                <li>https://runestone.academy/ns/books/published/csawesome/index.html (for AP CS A)</li>
                <li>https://www.khanacademy.org/ (various, not all)</li>
                <li>https://www.kaptest.com/study/pre-college-ap/ (World History, U.S. History, Biology)</li>
              </ul>
            </div>

            <h4 className="recipe_subHeader">International Baccalaureate (IB)</h4>

            <div className="recipe_text">
              With the IB program, there are 6 areas of study in the Diploma Programme: sciences, mathematics, studies
              in language and literature, language acquisition, the arts, and individuals and societies. Each of these
              classes comes with an end-of-year assessment that allows you to earn points ranging from 1-7.
            </div>
            <div className="recipe_text">
              If you were to score above a 4 out of 7 on the IB exam you may use this credit to waive college courses
              and may be able to skip freshman level courses that correspond to the respective class. The IB program
              curriculum has a global perspective and is widely recognized by varying countries (International
              Baccalaureate, n.d).
            </div>
            <div className="recipe_text">
              With the IB program there is also the choice to earn either the full Diploma Programme or to receive a
              certificate in individual courses. While the IB exams can be helpful in the admissions process, they do
              not guarantee you an admission into post-secondary institutions. There are several Canadian universities
              that actually accept the IB Diploma as an admission credential, as long as the scores on the diploma meet
              a certain target.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIB;
