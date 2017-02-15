import React  from 'react';

// set is as a const becuase this component does not have state
const Buttons = (props) => {
    const {prev, next, pgLocation} = props;
    return(
      <div className="btn-container">
        { pgLocation !== 0 ?  <button className="btn prev" onClick={() => prev()}> &lt;&lt; Prev </button> : " "}

        <button className="btn next" onClick={() => next()}> Next &gt;&gt; </button>
      </div>
    );
  }

// export Buttons component
export default Buttons;

// define the prop types
Buttons.propTypes = {
    prev: React.PropTypes.func,
    next: React.PropTypes.func,
    pgLocation: React.PropTypes.number
}
