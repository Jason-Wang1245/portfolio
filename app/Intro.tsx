import Spline from "@splinetool/react-spline";

export default function Intro() {
  return (
    <div className="intro-container">
      <div className="spline-background">
        <Spline style={{ height: "110vh" }} scene="https://prod.spline.design/PmIhYRk9YgZoIXMl/scene.splinecode" />
      </div>
      <div className="intro-content">
        <div className="grid place-content-center h-screen">Hello</div>
      </div>
    </div>
  );
}
