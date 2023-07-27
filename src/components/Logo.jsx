import Popcorn from "../assets/popcorn.png";

export const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-img" src={Popcorn} alt="Popcorn Logo" />
      <h1>NoteFlix</h1>
    </div>
  );
};
