import PropTypes from 'prop-types'

export const Button = ({ children, onClick }) => { 
  <Button type='button' onClick={onClick}>{ children }</Button>
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};