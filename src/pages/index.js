import React from "react";
import Home from "../containers/Home";
// import Loadable from "react-loadable";
import "../styles/home.scss";

const loader = () => <div>Loading.</div>;
//
// const HomeLazy = Loadable({
//   loader: () => import("../containers/Home"), 
//   loading: loader,
// });

const Index = () => {
  return (
    <>
      {/* <HomeLazy /> */}
      <Home/>
    </>
  );
};
export default Index;
