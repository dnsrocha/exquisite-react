import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';
import { render } from '@testing-library/react';


const FinalPoem = (props) => {

  const recitePoem = (poem) => {
    const renderedPoem = [];
    poem.forEach((line, index) => {
      renderedPoem.push(
        <p key={index}>{line}</p>
      )
    });
    return renderedPoem;
  }

  if (props.isFinal){

    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          <div>{recitePoem(props.poem)}</div>
        </section>
      </div>
    );
  
  } else {

    return (
      <div className="FinalPoem">
        <div className="FinalPoem__reveal-btn-container">
          <input
            type="button"
            onClick={props.onFinalClick}
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn" />
        </div>
      </div>
    );
  }
}


FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
