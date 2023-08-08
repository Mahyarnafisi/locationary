import Styles from "./EmptyListMessage.module.css";

function EmptyListMessage({ message }) {
  return <div className={Styles.message}>{message}</div>;
}

export default EmptyListMessage;
