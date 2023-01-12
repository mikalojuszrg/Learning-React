import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ children, onClick, backgroundColor }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
