import PropTypes from 'prop-types'
import { ButtonEl } from './button.style';

export const Button = ({ children, onClick }) => { 
  <ButtonEl type='button' onClick={onClick}>{ children }</ButtonEl>
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};