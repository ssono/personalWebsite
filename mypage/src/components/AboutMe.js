import React from "react"
import "./compCSS/AboutMe.css"

function AboutMe(props) {
  return(
    <div className="aboutMeWrapper shadow">
      <h4 className="question">What&apos;s your life story?</h4>
      <p className="answer">
      Years 1-12 grew up in Madison, WI. Moved to Atlanta, GA. Skipped senior year of high school to start college at Emory University.
      </p>
      <br/>

      <h4 className="question">Why did you choose to major in Computer Science and Philosophy?</h4>
      <p className="answer">
      Computer science teaches the tools and skills to build awesome things,
      while philosophy can give context as to what their practical and intended consequences could be.
      It seemed like a good combination for addressing social problems.
      </p>
      <br/>

      <h4 className="question">What is the air-speed velocity of an unladen swallow?</h4>
      <p className="answer">
      African or European?
      </p>
      <br/>

      <h4 className="question">What important truth do very few people agree with you on?</h4>
      <p className="answer">
        Subjective, unquantifiable evaluations are as valuable, and in some cases more valuable than objective metrics.
      </p>
      <br/>

      <h4 className="question">Why do you love scuba diving?</h4>
      <p className="answer">
      Mostly because it&apos;s a combinantion of a treasure hunt and a lottery!
      If you are meticulous and careful, you can discover rare exotic critters on nearly any dive,
      but if you&apos;re lucky, you can see graceful giants. Every dive is a new experience.
      </p>
      <br/>

      <h4 className="question">How many holes does a straw have?</h4>
      <p className="answer">
        If one asserts that a straw has two holes, then a piece of paper with a hole in it must also have two holes.
        If one asserts that a straw has one hole, then a wiffle ball must only have one hole.
        Since both options have practical issues we must then assume that a straw simulaneously has an infinite number of holes and no holes at all.
      </p>
      <br/>

      <h4 className="question">If you had to pick one job that wasn&apos;t the one you are currently pursuing, what would it be?</h4>
      <p className="answer">
      I would probably want to be a professor of some biological or environmental field at a university somewhere warm near the ocean.
      It would be great being able to balance between exciting field world in exotic places and a meaningful instruction on an area I cared about.
      </p>
      <br/>

    </div>
  )
}

export default AboutMe
