function User(props) {
  return (
    <div>
      <h2>{props.userName}</h2>
      <p>{props.tweet}</p>
    </div>
  );
}

export default User;
