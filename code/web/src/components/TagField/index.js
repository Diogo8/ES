import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TagField extends Component {
  state = {
    currentInput: '',
  };

  render() {
    const {
      props: {
        form: { values },
        label,
        push,
        remove,
      },
      state: { currentInput },
    } = this;
    return (
      <div class="row">
        <h3>{label}</h3>
        <input
          value={currentInput}
          onChange={ev => {
            this.setState({ currentInput: ev.target.value });
          }}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              e.preventDefault();
              if (currentInput.length > 1) {
                push(currentInput);
                this.setState({ currentInput: '' });
              }
            }
          }}
        />
        <ul>
          {values[this.props.name].length > 0 &&
            values[this.props.name].map((field, index) => (
              <li key={index}>
                {field}
                <button
                  onClick={ev => {
                    ev.preventDefault();
                    remove(index);
                  }}
                >
                  <span>x</span>
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

TagField.propTypes = {
  form: PropTypes.shape({
    values: PropTypes.shape(),
  }),
  name: PropTypes.string.isRequired,
  push: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TagField;
