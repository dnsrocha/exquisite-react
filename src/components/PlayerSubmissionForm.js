import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const emptyForm = {
    adj1:  '',
    noun1: '',
    adv:   '',
    verb:  '',
    adj2:  '',
    noun2: '',
  };

  const [formFields, setFormFields] = useState(emptyForm)

  const onAdj1Change = (event) => {
    console.log(`Adj1 Field Updated ${ event.target.value}`);
    setFormFields({
      ...formFields,
      noun1: event.target.value,
    });
  };

  const onAdvChange = (event) => {
    console.log(`Adv Field updated ${event.target.value }`);
    setFormFields({
      ...formFields,
      adv: event.target.value,
    });
  };

  const onAdj2Change = (event) => {
    
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <input
            placeholder="hm..."
            type="text" />

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
