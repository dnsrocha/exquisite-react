import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [player, setPlayer] = useState(1);
  const [isFinal, setIsFinal] = useState(false);
  const [poem, setPoem] = useState([]);

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const formToPoem = (form) => {
    return (
      `The
      ${form.adj1}
      ${form.noun1}
      ${form.adv}
      ${form.verb}
      the
      ${form.adj2}
      ${form.noun2}`
    );
  }

  const onFormSubmit = (formFields) => {
    console.log(`Form submitted`, formFields, poem, player)
    const updatedPoem = Array.from(poem);
    updatedPoem.push(formToPoem(formFields));
    setPoem(updatedPoem);
    setPlayer(player + 1);
  }

  const onFinalClick = () => {
    setIsFinal(true);
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>
      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission
        poem={poem}
        isFinal={isFinal} 
      />

      <PlayerSubmissionForm 
        player={player} 
        isFinal={isFinal} 
        onFormSubmit={onFormSubmit} 
      />

      <FinalPoem
        poem={poem}
        isFinal={isFinal}
        onFinalClick={onFinalClick} 
      />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
