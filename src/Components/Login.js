import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [signin, setsignin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errormessage, seterrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleclick = () => {
    if (!signin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential;
      

          navigate("/body");
        })
        .catch((error) => {
          seterrorMessage("Email already Exists.");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        
          navigate("/body");
        })
        .catch((error) => {
          seterrorMessage("Invalid Email or Password");
        });
    }
  };
  return (
    <div className="relative  ">
      <div className="absolute">
        <img
          className="h-screen object-cover w-screen"
          src="https://media.istockphoto.com/id/1191080960/photo/traditional-turkish-breakfast-and-people-taking-various-food-wide-composition.jpg?s=612x612&w=0&k=20&c=PP5ejMisEwzcLWrNmJ8iPPm_u-4P6rOWHEDpBPL2n7Q="
          alt="food-image"
        />
      </div>
      <div className="  absolute mt-[25%] md:mt-[10%] ml-[30%] border border-black rounded-4xl p-8 text-white bg-black opacity-75 w-1/2 md:w-2/6  ">
        <h1 className="text-3xl py-2 my-2 font-bold">
          {signin ? "Sign In" : "Sign Up"}
        </h1>
        <form
          className="text-2xl"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {!signin && (
            <div>
              Name{" "}
              <input
                ref={name}
                className="bg-gray-500 my-3 w-full  "
                type="text"
              />
            </div>
          )}
          Email
          <input ref={email} className="bg-gray-500 my-3 w-full" type="email" />
          Password
          <input
            ref={password}
            className="bg-gray-500 my-3 w-full"
            type="password"
          />
          <p className="text-md text-red-600">{errormessage}</p>
          <button
            onClick={handleclick}
            className="bg-red-900 w-full my-4 p-1.5 opacity-100 font-bold cursor-pointer"
          >
            {signin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <h2
          onClick={() => {
            setsignin(!signin);
          }}
          className="text-yellow-400"
        >
          {signin ? "New User? Sign Up" : "Already Signed In?"}
        </h2>
      </div>
    </div>
  );
};

export default Login;
