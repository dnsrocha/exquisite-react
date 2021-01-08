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

  const [formFields, setFormFields] = useState(emptyForm)    //hook for formFields

  const onFieldChange = (event) => {
    console.log(`${event.target.name} Field updated ${ event.target.value }`);
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };

  const inputClass = (input) => {
    if (input === ''){
      return "PlayerSubmissionFormt__input--invalid";
    } else {
      return "PlayerSubmissionFormt__input--valid";
    }
  }


  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted`, formFields);
    props.onFormSubmit(formFields);
    setFormFields(emptyForm);
  }

  if (props.isFinal){
    return (
      <div className="PlayerSubmissionForm">
      </div>
    )
  } else {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player # {props.player}</h3>
        <form className="PlayerSubmissionForm__form" onSubmit={onSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
            <p>The &nbsp;
            <input
              name="adj1"
              className={inputClass(formFields.adj1)}
              onChange={onFieldChange}
              value={formFields.adj1}
              placeholder="adjective"
              type="text" />
            &nbsp;

            <input
              name="noun1"
              className={inputClass(formFields.noun1)}
              onChange={onFieldChange}
              value={formFields.noun1}
              placeholder="noun"
              type="text" />
            &nbsp;

            <input
              name="adv"
              className={inputClass(formFields.adv)}
              onChange={onFieldChange}
              value={formFields.adv}
              placeholder="adverb"
              type="text" />
            &nbsp;

            <input
              name="verb"
              className={inputClass(formFields.verb)}
              onChange={onFieldChange}
              value={formFields.verb}
              placeholder="verb"
              type="text" />
            &nbsp;

            the &nbsp;

            <input
              name="adj2"
              className={inputClass(formFields.adj2)}
              onChange={onFieldChange}
              value={formFields.adj2}
              placeholder="adjective"
              type="text" />
            &nbsp;

            <input
              name="noun2"
              className={inputClass(formFields.noun2)}
              onChange={onFieldChange}
              value={formFields.noun2}
              placeholder="noun"
              type="text" />
            </p>

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>

        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  player: PropTypes.number.isRequired,
  isFinal: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
