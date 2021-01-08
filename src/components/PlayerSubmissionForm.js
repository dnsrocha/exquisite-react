import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [entry, setEntry] = useState ({
    
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  })

  const onEntryChange = (event) => {
    const newEntryValues = {
      ...entry,
    }
    const {name, value} = event.target;
    
    newEntryValues[name] = value;
    setEntry(newEntryValues);
  };
  
  const onFormSubmit = (event) => {
    event.preventDefault();

    const poemData = props.fields.map(field => {
      const submittedData = {...entry};
      if (field.key) {
        return submittedData[field.key];
      } else {
        return field;
      }
    }).join(' ');
    
    props.sendSubmission(poemData);

      setEntry({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: '',
      });
    }


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index }</h3>

      <form 
        className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          {
            props.fields.map((field, i) => {
              if (field.key) {
                return (
                  <input
                  key={field.key}
                  name={field.key}
                  placeholder={field.placeholder}
                  value={entry[field.key] || ''} 
                  onChange={onEntryChange}
                  data-testid={field.key}
                  type="text" 
                  className={entry[field.key] === '' ? 'PlayerSubmissionFormt__input--invalid' : ''}
                  />)
                } else {
                  return field;
                }
            })
          }      
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
