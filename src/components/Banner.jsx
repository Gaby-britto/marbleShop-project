import "./banner.css";
import banner from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="ContainerBanner">
      <img src={banner} alt="" />
      <div className="divText">
        <h1>
          Elegance and Durability 
          in <br />
          Every Stone
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut unde qui
          atque modi, ratione est, vero voluptatum magni sint omnis ipsa
          mollitia incidunt, cumque aliquid necessitatibus nesciunt a
          consectetur amet.
        </p>
      </div>
    </div>
  );
};

export default Banner;
