// use object destructuring instead of props
function User({ userName, tweet }) {
  return (
    <div>
      <h2>{userName}</h2>
      <p>{tweet}</p>
    </div>
  );
}

export default User;
