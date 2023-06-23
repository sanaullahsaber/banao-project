import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import img1 from "../../../assets/nav/Union 1.png";
import img2 from "../../../assets/Auth/atg_illustration.png";
import { AuthContext } from "../../../Providers/AuthProvider";
import { NavDropdown } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";



const NavBar = () => {
  const { user, createUser, signInWithGoogle, signInWithFacebook, signIn, logOut } =
    useContext(AuthContext);
  const [signUpModalShow, setSignUpModalShow] = useState(false);
  const [LoginModalShow, setLoginModalShow] = useState(false);
   const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 
 

   const handleCreateAnAccount = (event) => {
     event.preventDefault();
     const form = event.target;
     const name = form.name.value;
     const email = form.email.value;
     const password = form.password.value;

     console.log(name, email, password);

     createUser(email, password)
       .then((result) => {
         const createUser = result.user;
         console.log(createUser);
          setSignUpModalShow(false);
       })
       .catch((error) => {
       console.log(error);
     })
   };
  
  const handleGoogleSingIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
       setSignUpModalShow(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

   const handleFacebookSignIn = () => {
     signInWithFacebook()
       .then((result) => {
         const loggedUser = result.user;
         console.log(loggedUser);
         setSignUpModalShow(false);
       })
       .catch((error) => {
         console.log(error);
       });
  };
  
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      setLoginModalShow(false)
      })
      .catch((error) => {
        alert("Email address or password is incorrect.");
        console.log(error);
      });
  };


  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const handleSignUpModalOpen = () => {
    setSignUpModalShow(true);
  };

  const handleLoginModalOpen = () => {
    setLoginModalShow(true);
  }


  const handleSignUpModalClose = () => {
    setSignUpModalShow(false);
  };

  const handleLoginModalClose = () => {
    setLoginModalShow(false);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid className="ms-5 me-5">
          <Navbar.Brand href="#">
            <span className="text-success">ATG.</span>W<img src={img1} alt="" />
            RLD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex mx-auto">
              <Form.Control
                type="search"
                placeholder=""
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <p>
              <span>
                <button className="border-0">
                  <NavDropdown
                    title={
                      user ? (
                        <span style={{ width: "1000px" }}>
                          <img
                            style={{ height: "36px", width: "36px" }}
                            className="rounded-circle"
                            src={user.photoURL}
                            alt=""
                          />
                          <span>{user.displayName}</span>
                        </span>
                      ) : (
                        <span>
                          Create account.{" "}
                          <span className="text-primary">It's free!</span>
                        </span>
                      )
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item onClick={handleSignUpModalOpen}>
                      Sign Up
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLoginModalOpen}>
                      <div>
                        {user ? (
                          <span onClick={handleLogOut}>Sign Out</span>
                        ) : (
                          <span>Sign In</span>
                        )}
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                </button>
              </span>
            </p>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* sign Up modal show */}
      <Modal
        show={signUpModalShow}
        onHide={handleSignUpModalClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ background: "#EFFFF4" }}
          >
            <span
              style={{
                fontSize: "14px",
                textAlign: "center",
                color: "#008A45",
              }}
            >
              Let's Learn, share & inspire each other with our passion for
              computer engineering. Sign up now
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h3>Create Account</h3>
              </div>
              <p>
                Already have an account?{" "}
                <span
                  className="text-primary btn"
                  onClick={handleLoginModalOpen}
                >
                  Sign In
                </span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              {/* form section */}
              <div className="w-50 mt-3">
                <form onSubmit={handleCreateAnAccount}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control "
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="w-100">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <AiOutlineEyeInvisible size={20} />
                      ) : (
                        <AiOutlineEye size={20} />
                      )}
                    </span>
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  {password !== confirmPassword && (
                    <div style={{ color: "red" }}>Password do not match</div>
                  )}
                  <input
                    style={{ width: "100%" }}
                    type="submit"
                    value="Create an Account"
                    disabled={password !== confirmPassword}
                    className="btn btn-primary mt-3 rounded-pill"
                  />
                </form>

                {/* facebook login */}
                <button
                  onClick={handleFacebookSignIn}
                  style={{ width: "100%" }}
                  className="px-5 py-2 mt-3 border border-white"
                >
                  <FaFacebook
                    style={{ height: "32px", width: "32px" }}
                    className="me-2 text-primary"
                  ></FaFacebook>
                  Continue with Google
                </button>
                {/* google login */}
                <button
                  onClick={handleGoogleSingIn}
                  style={{ width: "100%" }}
                  className="px-5 py-2 mt-3 border border-white"
                >
                  <FcGoogle
                    style={{ height: "32px", width: "32px" }}
                    className="me-2"
                  ></FcGoogle>
                  Continue with Google
                </button>
              </div>
              {/* img section */}
              <div>
                <img src={img2} className="img-fluid" alt="" />
                <p style={{ fontSize: "12px" }}>
                  By Signing up, you agree to our Terms & Conditions, Privacy
                  policy
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      {/* login modal show */}
      <Modal
        show={LoginModalShow}
        onHide={handleLoginModalClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ background: "#EFFFF4" }}
          >
            <span
              style={{
                fontSize: "14px",
                textAlign: "center",
                color: "#008A45",
              }}
            >
              Let's Learn, share & inspire each other with our passion for
              computer engineering. Sign up now
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h3>Sign In</h3>
              </div>
              <p>
                Don't have an account yet?
                <span
                  className="text-primary btn"
                  onClick={handleSignUpModalOpen}
                >
                  Create new for free!
                </span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              {/* form section */}
              <div className="w-50 mt-3">
                <form onSubmit={handleLogin}>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control "
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="w-100">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <AiOutlineEyeInvisible size={20} />
                      ) : (
                        <AiOutlineEye size={20} />
                      )}
                    </span>
                  </div>
                  <input
                    style={{ width: "100%" }}
                    type="submit"
                    value="Sign In"
                    className="btn btn-primary mt-3 rounded-pill"
                  />
                </form>

                {/* facebook login */}
                <button
                  onClick={handleFacebookSignIn}
                  style={{ width: "100%" }}
                  className="px-5 py-2 mt-3 border border-white"
                >
                  <FaFacebook
                    style={{ height: "32px", width: "32px" }}
                    className="me-2 text-primary"
                  ></FaFacebook>
                  Continue with Google
                </button>
                {/* google login */}
                <button
                  onClick={handleGoogleSingIn}
                  style={{ width: "100%" }}
                  className="px-5 py-2 mt-3 border border-white"
                >
                  <FcGoogle
                    style={{ height: "32px", width: "32px" }}
                    className="me-2"
                  ></FcGoogle>
                  Continue with Google
                </button>
              </div>
              {/* img section */}
              <div>
                <img src={img2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default NavBar;
