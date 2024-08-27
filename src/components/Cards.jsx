import "./cards.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Cards = () => {
  return (
    <div className="containerCards">
      <div className="cards-container">
        <div className="card">
          <img src={img1} alt="" className="card-img" />
          <div className="card-content">
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              architecto nihil molestias suscipit, iure perspiciatis explicabo
            </p>
          </div>
        </div>

        <div className="card">
          <img src={img2} alt="" className="card-img" />
          <div className="card-content">
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              architecto nihil molestias suscipit, iure perspiciatis explicabo
            </p>
          </div>
        </div>

        <div className="card">
          <img src={img3} alt="" className="card-img" />
          <div className="card-content">
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              architecto nihil molestias suscipit, iure perspiciatis explicabo
            </p>
          </div>
        </div>

        <div className="card">
          <img src={img4} alt="" className="card-img" />
          <div className="card-content">
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              architecto nihil molestias suscipit, iure perspiciatis explicabo
            </p>
          </div>
        </div>
      </div>
      <h1> Elegance and Durability in Every Stone</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi non,
        dolore id unde a fuga odit omnis reiciendis ad, saepe fugiat magni
        nesciunt tempora! Enim suscipit possimus omnis accusamus nisi.
      </h2>
    </div>
  );
};

export default Cards;
