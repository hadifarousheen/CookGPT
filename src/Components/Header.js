import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { clearResult } from "../utils/resultSlice";
import { removeResultInfo } from "../utils/completedataSlice";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  const[showhome,setshowhome]=useState(false);
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
       
      })
      .catch((error) => {
        
      });
  };
  return (
    <div className="bg-black p-3 text-white  opacity-95 fixed z-40 w-full">
      <nav className="flex a">
        <h1 className="text-3xl my-auto font-bold ml-3">CookGPT</h1>
        <div className="ml-auto my-auto text-2xl mx-2 ">
         {
          showhome &&  <Link to="/body">
            <button
              onClick={() => {
                setshowhome(false);
                dispatch(clearResult());
                dispatch(removeResultInfo());
              }}
              className="mx-3 bg-red-800 p-2 rounded-lg shadow-md "
            >
              Home
            </button>
          </Link>
         }

          <Link to="gptsearch">
            {" "}
            <button
              onClick={()=>{
                setshowhome(true);
              }}
              className="mx-3 bg-red-800 p-2 rounded-lg shadow-md  "
            >
              GPT Search
            </button>
          </Link>

          <button
            className="mx-3 bg-red-800 p-2 rounded-lg shadow-md"
            onClick={() => {
              dispatch(clearResult());
              dispatch(removeResultInfo());
              handlesignout();
            }}
          >
            Sign Out
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
