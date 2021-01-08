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
    console.log(`Adj2 Field updated ${event.target.value}`);
    setFormFields({
      ...formFields,
      adj2: event.target.value,
    });
  };

  const onNoun2Change = (event) => {
    console.log(`Noun2 Field updateed ${event.target.value}`);
    setFormFields({
      ...formFields,
      noun2: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted`);
    props.onFormSubmit(formFields);
    setFormFields(emptyForm);
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className="PlayerSubmissionForm__form" 
        onSubmit={onSubmit}
      >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <p>The &nbsp;
          <input
            name="adj1"
            onChange={onAdj1Change}
            value={formFields.adj1}
            placeholder="adjective"
            type="text" />
          &nbsp;
          <input
            name="noun1"
            onChange={onNoun1Change}
            value={formFields.noun1}
            placeholder="noun"
            type="text" />
          &nbsp;
          <input
            name="adv"
            onChange={onAdvChange}
            value={formFields.adv}
            placeholder="adverb"
            type="text" />
          &nbsp;
          <input
            name="verb"
            onChange={onVerbChange}
            value={formFields.verb}
            placeholder="verb"
            type="text" />
          &nbsp; the &nbsp;
          <input
            name="adj2"
            onChange={onAdj2Change}
            value={formFields.adj2}
            placeholder="adjective"
            type="text" />
          &nbsp;
          <input
            name="noun2"
            onChange={onNoun2Change}
            value={formFields.noun2}
            placeholder="noun"
            type="text" />
          </p>

          {/* The adjective noun adverb verb the adjective noun. */}
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

export default PlayerSubmissionForm;
