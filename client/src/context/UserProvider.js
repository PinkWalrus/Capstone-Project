import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
// this creates a special React object with two key properties:
// - Consumer & Provider

// The UserProvider is our 'Wrapper' for our app. This will be the thing that contains our global state.
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
  });
  const [userData, setUserData] = useState({
    first_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          console.log(user);
          if (Object.keys(user)[0] !== "cart") {
            setIsLoggedIn(true);
          }
          setUser(user);
        });
      } else {
        resp.json().then(({ errors }) => setErrors([errors]));
      }
    });
  }, []);

  // update the userData object
  const handleInputChangeSignUp = (e) => {
    const stateCopy = { ...userData };
    stateCopy[e.target.name] = e.target.value;
    setUserData(stateCopy);
  };

  // submit the form data
  const handleFormSubmit = () => {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };
    fetch("/signup", config).then((resp) => {
      if (resp.ok) {
        return resp.json().then((user) => {
          console.log(user);
          setUser(user);
          setIsLoggedIn(true);
          navigate("/");
          setUserData({
            first_name: "",
            email: "",
            password: "",
            password_confirmation: "",
          });
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([errors]);
          setTimeout(() => setErrors([]), 5000);
        });
        console.log(errors);
      }
    });
  };

  // update the userData object
  const handleInputChange = (e) => {
    const stateCopy = { ...loginCredentials };
    stateCopy[e.target.name] = e.target.value;
    setLoginCredentials(stateCopy);
  };

  // submit the form data
  const handleLoginClick = () => {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCredentials),
    };
    fetch("/login", config).then((resp) => {
      setLoginCredentials({
        email: "",
        password: "",
      });
      if (resp.ok) {
        return resp.json().then((user) => {
          console.log(user);
          setUser(user);
          setIsLoggedIn(true);
          navigate("/");
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([errors]);
          setTimeout(() => setErrors([]), 5000);
        });
        console.log(errors);
      }
    });
  };

  const handleLogoutClick = () => {
    const config = {
      method: "DELETE",
    };
    fetch("/logout", config)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
        setIsLoggedIn(false);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userData,
        setUserData,
        handleInputChangeSignUp,
        handleFormSubmit,
        loginCredentials,
        setLoginCredentials,
        isLoggedIn,
        setIsLoggedIn,
        handleInputChange,
        handleLoginClick,
        handleLogoutClick,
        errors,
        setErrors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
