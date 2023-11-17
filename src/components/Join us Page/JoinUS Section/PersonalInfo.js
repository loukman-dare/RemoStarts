import React from 'react'

function PersonalInfo() {
  return (
    <div className='personal component format'>
        <form method='post' >
            <div className='cv'>
                <label for="file">Upload your CV <span>*</span></label>
                <label for="file">
                attach your CV
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.4403 11.0499L12.2503 20.2399C11.1244 21.3658 9.59747 21.9983 8.00529 21.9983C6.41311 21.9983 4.88613 21.3658 3.76029 20.2399C2.63445 19.1141 2.00195 17.5871 2.00195 15.9949C2.00195 14.4027 2.63445 12.8758 3.76029 11.7499L12.9503 2.55992C13.7009 1.80936 14.7188 1.3877 15.7803 1.3877C16.8417 1.3877 17.8597 1.80936 18.6103 2.55992C19.3609 3.31048 19.7825 4.32846 19.7825 5.38992C19.7825 6.45138 19.3609 7.46936 18.6103 8.21992L9.41029 17.4099C9.03501 17.7852 8.52602 17.996 7.99529 17.996C7.46456 17.996 6.95557 17.7852 6.58029 17.4099C6.20501 17.0346 5.99418 16.5256 5.99418 15.9949C5.99418 15.4642 6.20501 14.9552 6.58029 14.5799L15.0703 6.09992" stroke="#406AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </label>
                <input type='file' id="file" className='d-none' />
            </div>
            <div className='fname'>
                <label >First Name<span>*</span></label>
                <input type='text' />
            </div>
            <div className='lname'>
                <label >Last Name<span>*</span></label>
                <input type='text' />
            </div>
            <div className='email'>
                <label >Email <span>*</span></label>
                <input type='email' />
            </div>
            <div className='phone'>
                <label >Phone num<span>*</span></label>
                <input type='text' />
            </div>
            <div className='address'>
                <label >Address<span>*</span></label>
                <input type='text' />
            </div>
            <div className='pic'>
                <label >Add picture</label>
                <label for="pic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#353546" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#353546" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Upload personal picture
                </label>
                <input type='file' id="pic" className='d-none'/>
            </div>
            <h2>Job Information</h2>
            <div className='position'>
                <label >Position<span>*</span></label>
                <select name="pets" id="pet-select">
                    <option value="">Select a Position</option>
                    <option value="dog">Web developement</option>
                    <option value="job">Software Engineering</option>
                    <option value="job">Ui / Ux</option>
                    <option value="job">Mobile application</option>
                    <option value="job">AI</option>
                </select>
            </div>
            <div className='position-type'>
                <label >Position type<span>*</span></label>
                <select name="pets" id="pet-select">
                    <option value="">Select a Position Type</option>
                    <option value="dog">Training</option>
                    <option value="job">job</option>
                </select>
            </div>
            <div className='linked in'>
                <label >Linked in profile</label>
                <input type='text' />
            </div>
            <div className='links'>
                <label >Other links (Behance, Git hub, etc..)</label>
                <input type='text' />
            </div>
            <div className='about-you'>
                <label >talk about your self in 150 Characters<span>*</span></label>
                <input type='text' />
            </div>
            <div className='button'>
                <button>Submit application</button>
            </div>
        </form>
    </div>
  )
}

export default PersonalInfo