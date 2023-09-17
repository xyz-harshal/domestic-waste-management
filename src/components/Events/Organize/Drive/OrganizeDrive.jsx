import React, { useState } from 'react';
import "./OrganizeDrive.css";

export const OrganizeDrive = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    date: '',
    time:'',
    maxPeopleLimit: '',
    agenda: '',
    organizerEmail: '',
    phoneNumber: '',
    area: '',
    district:'',
    city:'',
    briefing:''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='OrganizeDrive'>
      <h2 className='form-title'>Organize a Drive</h2>

      <p className='form-description-container'>
        
        <p className='form-description'>Fill out the form below to register your drive:</p>
      </p>
      <div className="separator"></div>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='organizationName'>Name:</label>
          <br />
          <input className='form-input'
            type='text'
            id='organizationName'
            name='organizationName'
            placeholder='Srushti Ubale'
            value={formData.organizationName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='dateTime'>Date:</label>
          <br />
          <input className='form-input'
            type='date'
            id='date'
            name='date'
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='dateTime'>Time:</label>
          <br />
          <input className='form-input'
            type='time'
            id='time'
            name='time'
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='maxPeopleLimit'>Max People Limit:</label>
          <br />
          <input className='form-input'
            type='number'
            id='maxPeopleLimit'
            name='maxPeopleLimit'
            value={formData.maxPeopleLimit}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='agenda'>Agenda:</label>
          <br />
          <input className='form-textarea'
            id='agenda'
            name='agenda'
            maxLength={30}
            value={formData.agenda}
            onChange={handleInputChange}
            placeholder='Enter your drive agenda...'
            required
          ></input>
        </div>

        <div className='form-group'>
          <h4 className='form-subtitle'>Organizer's Contact Details:</h4>

          <div className='contact-details'>
            <div className='form-group'>
              <label htmlFor='organizerEmail'>Email:</label>
              <br />
              <input className='form-input'
                type='text'
                id='organizerEmail'
                placeholder='abc@gmail.com'
                name='organizerEmail'

                value={formData.organizerEmail}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='phoneNumber'>Phone Number:</label>
              <br />
              <input className='form-input'
                type='tel'
                placeholder='XXXXXXXXXX'
                id='phoneNumber'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className='address_details'>

          <div className='form-group'>
            <label htmlFor='area'>District:</label>
            <br />
            <input className='form-input'
              type='text'
              id='district'
              name='district'
              placeholder='Nashik'
              value={formData.district}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='area'>City:</label>
            <br />
            <input className='form-input'
              type='text'
              id='city'
              name='city'
              placeholder='Sinnar'
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='area'>Area:</label>
            <br />
            <input className='form-input'
              type='text'
              id='area'
              name='area'
              placeholder='XYZ road'
              value={formData.area}
              onChange={handleInputChange}
              required
            />
          </div>

        </div>

      
        <div className="form-group">
          <textarea
            id='briefing'
            name='briefing'
            value={formData.briefing}
            onChange={handleInputChange}
            placeholder='Provide a brief description of the drive...'
            rows='4'
            cols='50'
            required
            className='form-textarea'
          ></textarea>
        </div>
        
        <button type='submit' className='form-button' >Submit
        </button>
      </form>
    </div>
  );
};
