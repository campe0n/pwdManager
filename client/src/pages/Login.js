import { Link } from "react-router-dom";

const styles = {
  div: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  h2: {
    margin: 0,
    padding: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
};

export default function Login() {
  return (
    <div style={styles.div}>
      <h2 style={styles.h2}>Log in.</h2>
      <form style={styles.form}>
        <label for="username">Username:</label>
        <input type="text"></input>
        <label for="email">Email:</label>
        <input type="text"></input>
        <label for="password">Password:</label>
        <input type="text"></input>
        <input type="submit" value="Submit"></input>
        <p>
          Don't have an account? Sign up
          <Link exact path="/signup">
            <span>Here</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
