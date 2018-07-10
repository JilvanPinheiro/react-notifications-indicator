import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';

class FontAwesome extends React.Component {
  render() {
    const { icon, onClick } = this.props;
    return <i onClick={onClick} className={icon} />;
  }
}

FontAwesome.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
};

FontAwesome.defaultProps = {
  onClick: () => null,
};

export default FontAwesome;
