import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <>
      <nav>
        Layout Setting in React{" "}
        {props?.header && (
          <>
            <br />
            <h1>{props?.header[0]}</h1>
          </>
        )}
      </nav>
    </>
  );
}

function Sidebar(props) {
  //   console.log("sidebar props", props);
  return (
    <>
      <div className="sidebar">
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
            };
          }}
        >
          Home Page
        </NavLink>
        <NavLink
          to="/first"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
            };
          }}
        >
          First Page
        </NavLink>
        <NavLink
          to="/second"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
            };
          }}
        >
          Second Page
        </NavLink>
        <NavLink
          to="/third"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
            };
          }}
        >
          Third Page
        </NavLink>
        {props.links}
      </div>
    </>
  );
}

function Main(props) {
  return <div className="main-content">{props.children}</div>;
}

function DashboardLayout(props) {
  //   console.log("props", props.children);
  return (
    <>
      <Header {...props} />
      <Sidebar {...props} />
      <Main {...props} />
    </>
  );
}

export default DashboardLayout;
