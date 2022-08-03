import React, { useContext, useState } from "react";
import { ContextProvider } from "../../Global/Context";
const Model = () => {
  // tarns data by context
  const { model, closeModel, register, login } = useContext(ContextProvider);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  // state for login and register
  const [state, setState] = useState({
    register: true,
    login: false,
  });
  // to open model and use one model for reagister and login
  const formToggle = () => {
    setState({
      ...state,
      register: !state.register,
      login: !state.login,
    });
  };
  // close model
  const closeForm = (e) => {
    const className = e.target.getAttribute("class");
    if (className == "model") {
      closeModel();
    }
  };
  // get data from inputs
  const handleInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  // register form
  const registerForm = (e) => {
    e.preventDefault();
    // console.log(inputs);
    register(inputs);

    setInputs({
      name: "",
      email: "",
      password: "",
    });
  };

  // login Form submit
  const userLogin = (e) => {
    e.preventDefault();
    login(inputs);
  };

  return (
    <>
      {model ? (
        <div className="model" onClick={closeForm}>
          <div className="model_container">
            {state.register ? (
              <div className="model_model_form">
                <form onSubmit={registerForm}>
                  <div className="model_group">
                    <img src="./images/logo-insta.png" width={90} alt="" />
                  </div>

                  <div className="model_group">
                    <input
                      type="text"
                      name="name"
                      className="model_input"
                      onChange={handleInputs}
                      placeholder="user name"
                      value={inputs.name}
                      required
                    />
                  </div>
                  <div className="model_group">
                    <input
                      type="email"
                      name="email"
                      className="model_input"
                      onChange={handleInputs}
                      placeholder="email"
                      value={inputs.email}
                      required
                    />
                  </div>
                  <div className="model_group">
                    <input
                      type="password"
                      name="password"
                      className="model_input"
                      onChange={handleInputs}
                      placeholder="password"
                      value={inputs.password}
                      required
                    />
                  </div>

                  <div className="model_group">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn_smart"
                    />
                  </div>
                  <div className="model_group">
                    <span onClick={formToggle}>Already have an account ? </span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="model_model_form">
                <form onSubmit={userLogin}>
                  <div className="model_group">
                    <img src="./images/logo-insta.png" width={90} alt="" />
                  </div>
                  <div className="model_group">
                    <input
                      type="email"
                      name="email"
                      className="model_input"
                      onChange={handleInputs}
                      placeholder="email"
                      value={inputs.email}
                      required
                    />
                  </div>
                  <div className="model_group">
                    <input
                      type="password"
                      name="password"
                      className="model_input"
                      onChange={handleInputs}
                      placeholder="password"
                      value={inputs.password}
                      required
                    />
                  </div>

                  <div className="model_group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn_smart"
                      // onChange={handleInputs}
                      // onClick={formToggle}
                    />
                  </div>
                  <div className="model_group">
                    <span onClick={formToggle}>Create a new account ? </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Model;
