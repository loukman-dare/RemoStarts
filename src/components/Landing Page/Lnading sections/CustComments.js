import React, { useState , useEffect    } from 'react'
import robot from "../../../images/Rectangle 74.png"
function CustComments() {
    const userName = ["mohammad essa" , "loukman Dareusey"];
    const career = ["Ceo, Itech" , "software Engineering"]
    const [userNumber,setUserNumber] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setUserNumber((prevUserNumber) =>
            prevUserNumber === userName.length - 1 ? 0 : prevUserNumber + 1
          );
        }, 3000);
      
        return () => clearInterval(intervalId); // يتم تنظيف الفاصل الزمني عندما يتم تفريغ المكون
      }, []);
      
  return (
    <div className='comments d-flex'>
        <div className='text-comm'>
            <h3>Here’s what our customers have to say about us,</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='img-comm'>
            <img src={robot} />
        </div>

        <div className='abslout-comm'>
            <div className='name'>
                <p>{userName[userNumber]}</p>
                <span>{career[userNumber]}</span>
            </div>
            <div className='comment'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                {userName[userNumber] == "loukman Dareusey" ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> : ""}


                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
                <div className='moving'>
                    <span className={userNumber==0 ? "active" : ""}></span>
                    <span className={userNumber==1 ? "active" : ""}></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustComments