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
  const[showgptsearch,setshowgptsearch]=useState(true);
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
      });
  };
  return (
    <div className="bg-black p-1.5 md:p-3 text-white  opacity-95 fixed z-40 w-full">
      <nav className="flex  ">
        <h1 className=" text-xl md:text-3xl my-auto font-bold md:ml-3">CookGPT</h1>
        <div className="ml-auto my-auto md:ml-auto  md:text-2xl  md:mx-2 ">
         {
          showhome &&
          <Link to="/body">
            <button
              onClick={() => {
              setshowgptsearch(!showgptsearch);
              setshowhome(!showhome)
                dispatch(clearResult());
                dispatch(removeResultInfo());
              }}
              className=" mx-0.5 md:mx-3 bg-red-800 p-1 md:p-2 rounded-lg shadow-md hover:bg-red-400 "
            >
              Home
            </button>
          </Link>
         }
{
  showgptsearch &&
          <Link to="gptsearch">
            <button
              onClick={()=>{
        setshowgptsearch(!showgptsearch);
              setshowhome(!showhome)
              }}
              className="mx-0.5 md:mx-3 bg-red-800 p-1 md:p-2 rounded-lg shadow-md hover:bg-red-400  "
            >
              GPT Search
            </button>
          </Link>
}
          <button
            className=" mx-0.5 md:mx-3 bg-red-800 p-1 md:p-2 rounded-lg shadow-md hover:bg-red-400"
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
