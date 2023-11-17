import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCheck, faContactBook, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div className='services' id='services'>
      {/* Section Title */}
      <p className='text-center'>What Services, We Give You!</p>

      {/* Services Cards */}
      <div className='services-cards d-flex gap-2 justify-content-between flex-wrap'>
        {/* Service Card 1 */}
        <div className='service-card'>
          <FontAwesomeIcon icon={faCar} />
          <p>100+ tours around Rwanda</p>
        </div>

        {/* Service Card 2 */}
        <div className='service-card'>
          <FontAwesomeIcon icon={faCheck} />
          <p>100+ tours around Agence</p>
        </div>

        {/* Service Card 3 */}
        <div className='service-card'>
          <FontAwesomeIcon icon={faContactBook} />
          <p>100+ tours around Experience</p>
        </div>

        {/* Service Card 4 */}
        <div className='service-card'>
          <FontAwesomeIcon icon={faThumbsUp} />
          <p>100+ tours around Happy</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
