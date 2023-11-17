
import React, { useState } from 'react';
import realme10 from "../../../images/Realme 10.png"
import realme11 from "../../../images/Realme 11.png"
import circle1 from "../../../images/Ellipse 345.png"
import wave from "../../../images/Vector.png"
import iphone from "../../../images/iPhone 13 Pro.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function OurProjects() {
  const Navigate = useNavigate()
  const imgProject = [{phone1:realme10,phone2:realme11} , {phone1:iphone}]
  const headProject = ["travel" , "App Store"]
  const descProject = [{p1:"Uwang Corporation, a leading provider of financial services, was struggling to keep up with the demands of its growing business.",p2:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",p3:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"},
  {p1:"Uwang Corporation, a leading provider of financial services, was struggling to keep up with the demands of its growing business.",p2:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"}
  ]
  const [projectNum , setProjectNum] = useState(0);
  function incrementCount(){
    projectNum < headProject.length - 1? setProjectNum(projectNum + 1) : setProjectNum(0)
  }
  function decrementCount(){
    projectNum > 0 ? setProjectNum(projectNum - 1) : setProjectNum(headProject.length - 1)
  }console.log(projectNum)
  return (
    <div className='projects component d-flex flex-wrap'>
      <div className='heading'>
        <h2>Our Projects</h2>
      </div>
      <div className={`project-img col-6 ${projectNum ==0 ? "travel" : "store"}`}>
        <img src={imgProject[projectNum].phone1} />
        <img src={imgProject[projectNum].phone2}  />
        <img src={circle1} alt="Circle 1" />
        {/* <img src={circle2} alt="Circle 2" /> */}
        <svg width="150" className={`circle${projectNum}`} height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.3" cx="75" cy="75" r="75" fill="#C39139"/>
        </svg>

      </div>
      <div className='project-name col-6'>
        <div className={`back${projectNum}`}></div>
        <div className='arrow'>
          <svg onClick={()=>incrementCount()} width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 20L2 11L11 2" stroke="#406AFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg onClick={()=>decrementCount()} width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 20L11 11L2 2" stroke="#406AFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h2>{headProject[projectNum]} <svg width="50" className={`circle circle${projectNum}`} height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="25" fill="#EDDEC4"/>
            </svg>
        </h2>
        <div>
          <h3>Case Study- {headProject[projectNum]}</h3>
          <p>{descProject[projectNum].p1} <br/> +</p>
          <p>{descProject[projectNum].p2}</p>
          <p>{descProject[projectNum].p3}</p>
          <button onClick={()=>Navigate("/view")}>View Case Study<FontAwesomeIcon icon={faChevronRight} />
            <FontAwesomeIcon icon={faChevronRight} /> </button>
        </div>
      </div>
     
      <div className='wave'>
        <img src={wave} alt="Wave 1" />
        <img src={wave} alt="Wave 2" />
      </div>
    </div>
  );
}

export default OurProjects;
