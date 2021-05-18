import "./Programs.scss";

import { Button, div, withStyles } from "@material-ui/core";

import React from "react";
import RotatingLogo from '../components/RotatingLogo'
import emergencyURL from '../assets/programs/emergency.jpeg'
import mentoringURL from '../assets/programs/mentoring.jpeg'
import programURL from '../assets/programs/supervision.jpeg'
import reportURL from '../assets/programs/report.jpeg'
import respiteURL from '../assets/programs/respite.jpeg'
import transportURL from '../assets/programs/transport.jpeg'

function Programs(props) {

  return (
    <div className="Programs">
        <RotatingLogo className="background-logo" />
      <div className="blur-background"></div>
      <div className="programs-title">Programs to provide you Comfort</div>
      <p className="programs-descriptiion">
        We offer a variety of programs to meet the needs of all our children,
        and provide comfort and ease of mind to Guardians. The below provides an
        outline of the services we offer. Our friendly staff are able to provide
        any further information, as well as answer any pending questions you may
        have.<br /><br />
      </p>
      
      <div className="programs">
      <Button variant="contained" color="primary" className="programs-contact-us" size="large">Contact Us</Button>
      <br /><br />
        <div className="program">
          <img className="program-image" src={programURL} alt={programURL}/>
          <div className="program-title">Contact Supervision</div>
          <div className="program-description">
            Connecting Families have fully trained, experienced and qualified
            friendly staff to ensure constructive and positive contact between a
            child(ren) or young person(s) and their parents/family. Our staff
            focuses on the safety and wellbeing of the child(ren) or young
            person(s). Our staff assist parents/family members with skills and
            techniques to make each contact enriching and enjoyable for all
            participants
          </div>
        </div>
        <div className="program">
          <img className="program-image"  src={reportURL} alt={reportURL}/>
          <div className="program-title">Report Writing</div>
          <div className="program-description">
            Our staff maintains thorough and complete reports of each contact
            visit . Our reports are suitable for use in court proceedings.
          </div>
        </div>
        <div className="program">
          <img className="program-image"  src={transportURL} alt={transportURL}/>
          <div className="program-title">Supervised Transportation</div>
          <div className="program-description">
            We provide transport and supervise child(ren) or young person(s) for
            a variety of activities. Our staff will ensure the transports and
            supervisions are safe and enjoyable.
          </div>
        </div>
        <div className="program">
          <img className="program-image"  src={emergencyURL} alt={emergencyURL}/>
          <div className="program-title">Emergency Respite</div>
          <div className="program-description">
            Our team are available 24 hours to provide support and supervise
            child(ren) or young person(s) with the access to our Overnight
            Centres or other suitable locations for emergency care. Our staff
            will support and supervise child(ren) or young person(s) with the
            focus on their emotional needs.
          </div>
        </div>
        <div className="program">
          <img className="program-image"  src={respiteURL} alt={respiteURL}/>
          <div className="program-title">Day and Overnight Respite</div>
          <div className="program-description">
            We are ready with plans for constructive, enjoyable and fun
            activities for child(ren) or young person(s). We provide day
            activities and short term activities that focus on the child(ren) or
            young person(s) needs and requirements. Child(ren) or young
            person(s) have access to our Overnight Centre or other suitable
            locations for short term respites
          </div>
        </div>
        <div className="program">
          <img className="program-image"  src={mentoringURL} alt={mentoringURL}/>
          <div className="program-title">Mentoring</div>
          <div className="program-description">
            Our specific designed programs cater to the needs and requirements
            of the mentees. Upon our assessment of the mentees, we aim to assign
            the most suitable mentor for the mentee to support and provide
            guidance to reach their goals.
          </div>
        </div>
        <div className="programs-learn-more">
            Learn more about what we have to offer with Activities australia
        </div>
      </div>
    </div>
  );
}

export default Programs;
