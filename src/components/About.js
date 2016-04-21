import React from 'react';

const About = () => (
  <div>
    <h2>Schedule</h2>
    <form className="form-horizontal">
      <div className="form-group">
        <label className="col-sm-2 control-label">From</label>
        <div className="col-sm-10" id="departureDropdown">
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">To</label>
        <div className="col-sm-10" id="arrivalDropdown">
        </div>
      </div>
    </form>
  </div>
);

export default About;
