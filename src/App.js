import ReactDOM from "react-dom/client";
import Login from "./Components/Login";
import Body from "./Components/Body";
import { HashRouter, Routes, Route } from "react-router-dom";
import Recipe from "./Components/Recipe";
import GptSearch from "./Components/GptSearch";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import VideoBackground from "./Components/VideoBackground";
import CardContainer from "./Components/CardContainer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/body" element={<Body />}>
        <Route
          index
          element={
            <>
              <VideoBackground />
              <CardContainer />
            </>
          }
        />
        <Route path="gptsearch/recipe/:id" element={<Recipe />} />

        <Route path="recipe/:id" element={<Recipe />} />
        <Route path="gptsearch" element={<GptSearch />} />
        <Route path="body/gptsearch" element={<GptSearch />} />
      </Route>
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
