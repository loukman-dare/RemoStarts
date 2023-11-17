import React from 'react'
import member1 from "../../../images/Rectangle 80.png"
import mem2 from "../../../images/Rectangle 82.png"
import mem3 from "../../../images/Rectangle 83.png"
import mem4 from "../../../images/Rectangle 84.png"
import ic1 from "../../../images/Development.svg"
import ic2 from "../../../images/Manager.svg"
import ic3 from "../../../images/gaming remote (1).svg"
import ic4 from "../../../images/Design.svg"
function Team() {
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
        },
        "member5": {
            "id": 1,
            "name": "Eng.Nawar Ali",
            "position": "Ceo, Remo start",
            "image": member1,
            "icons":[ic1,ic2]
        },
        "member6": {
            "id": 2,
            "name": "John Doe",
            "position": "Developer",
            "image": mem2,
            "icons":[ic3]
        },
        "member7": {
            "id": 3,
            "name": "Jane Smith",
            "position": "Designer",
            "image": mem3,
            "icons":[ic4]

        },
        "member8": {
            "id": 4,
            "name": "Eng.sarya",
            "position": "UI/UX, Remo start",
            "image": mem4,
            "icons":[ic4]
        }, "member9": {
            "id": 1,
            "name": "Eng.Nawar Ali",
            "position": "Ceo, Remo start",
            "image": member1,
            "icons":[ic1,ic2]
        },
        "member10": {
            "id": 2,
            "name": "John Doe",
            "position": "Developer",
            "image": mem2,
            "icons":[ic3]
        },
        "member11": {
            "id": 3,
            "name": "Jane Smith",
            "position": "Designer",
            "image": mem3,
            "icons":[ic4]

        },
        "member12": {
            "id": 4,
            "name": "Eng.sarya",
            "position": "UI/UX, Remo start",
            "image": mem4,
            "icons":[ic4]
        }
    }
  return (
    <div className='career-team team'>
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
        </div>
  )
}

export default Team