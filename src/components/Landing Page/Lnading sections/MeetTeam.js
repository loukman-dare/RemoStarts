import React, { useEffect, useState } from 'react'
import member1 from "../../../images/Rectangle 80.png"
import mem2 from "../../../images/Rectangle 82.png"
import mem3 from "../../../images/Rectangle 83.png"
import mem4 from "../../../images/Rectangle 84.png"
import stars from "../../../images/Group 3.png"
import employee from "../../../images/Ellipse 1 (1).png"
import other from "../../../images/Group 40.png"
import { useNavigate } from 'react-router-dom'
import ic1 from "../../../images/Development.svg"
import ic2 from "../../../images/Manager.svg"
import ic3 from "../../../images/gaming remote (1).svg"
import ic4 from "../../../images/Design.svg"


import axios from 'axios'
import { icon } from '@fortawesome/fontawesome-svg-core'
function MeetTeam() {
   const memberData= {
        "member1": {
            "id": 1,
            "name": "Eng.Nawar Ali",
            "position": "Ceo, Remo start",
            "image": member1,
            "icons":[ic1,ic2]
        },
        "member2": {
            "id": 2,
            "name": "John Doe",
            "position": "Developer",
            "image": mem2,
            "icons":[ic3]
        },
        "member3": {
            "id": 3,
            "name": "Jane Smith",
            "position": "Designer",
            "image": mem3,
            "icons":[ic4]

        },
        "member4": {
            "id": 4,
            "name": "Eng.sarya",
            "position": "UI/UX, Remo start",
            "image": mem4,
            "icons":[ic4]
        }
    }
    const Navigate = useNavigate();
  return (
    <div className='meet component'>
        <div className='heading'>
            <h2>Meet Our Team</h2>
        </div>
        <p>We help build and manage a team of world-class developers to bring your vision to life</p>
        <div className='team'>
            
            {Object.keys(memberData).map((key) => (
            <div className='member' key={memberData[key].id}>
                <img src={memberData[key].image} alt={memberData[key].name} />
                <p className='mem-name'>{memberData[key].name}</p>
                <p>{memberData[key].position}</p>
                <div className='mem-icons'>
                    {memberData[key].icons.map((icon)=>(
                        <img src={icon}/>
                    ))}
                </div>
            </div>  
          ))}
        </div>
        <div className='best-employee d-flex justify-content-between'>
            <h2>Hire the best employee!</h2>
            <div className='employee'>
                <div className='img-employee' >
                    <img src={employee} />
                </div>
                <div className='stars-employee'>
                    <img src={stars} />
                </div>
                <div className='employee-name'>
                    <p>Loukman dareusey</p>
                </div>
                <div className='employee-career'>
                    <p>Software Engineer</p>
                </div>
            </div>
            <div className='other-emplo'>
                <div onClick={()=>Navigate("/careers")}>
                    <img src={other} />
                    <button >See other our team</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeetTeam