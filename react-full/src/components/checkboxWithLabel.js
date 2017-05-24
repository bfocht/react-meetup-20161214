import React, { Component, PropTypes } from 'react';

class CheckboxWithLabel extends Component {

  constructor(props) {
    super(props);
    this.state = {isChecked: false};

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    const {
      index,
      labelOn,
      labelOff
    } = this.props;

    return (
      <label className="checkbox-small">

        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? labelOn : labelOff} {index}
      </label>
    );
  }
}

CheckboxWithLabel.propTypes = {
  index: PropTypes.string.isRequired,
  labelOn: PropTypes.string.isRequired,
  labelOff: PropTypes.string.isRequired
}

export default CheckboxWithLabel;
