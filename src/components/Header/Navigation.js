import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <h1>A Typical Page</h1>
          </li>
        </ul>
        {props.isAuthenticated && (
          <ul>
            <li>Home</li>
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
