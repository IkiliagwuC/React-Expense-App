import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //whitespace is very important
  return <div className={classes}>{props.children}</div>;
}

export default Card;
