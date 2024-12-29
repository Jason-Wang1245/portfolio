import Spline from "@splinetool/react-spline/next";
import Home from "./Home";

export default function page() {
  return (
    <div className="app-container">
      <div className="spline-background">
        <Spline style={{ height: "100vh" }} scene="https://prod.spline.design/BV-sHVhB1a54EfWN/scene.splinecode" />
      </div>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
