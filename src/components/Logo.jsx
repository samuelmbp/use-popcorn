import Popcorn from "../assets/popcorn.png";

export const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-img" src={Popcorn} alt="Popcorn Logo" />
      {/* <span role="img">🍿</span> */}
      <h1>usePopcorn</h1>
    </div>
  );
};
