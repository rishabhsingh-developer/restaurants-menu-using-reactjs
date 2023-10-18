import "./styles.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false
  }
];
export default function App() {
  return (
    <div className="App">
      <Header />
      <Image />
      <Time />
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <h1>FAST REACT PIZZA CO.</h1>
      <h2>OUR MENU</h2>
    </div>
  );
}
function Image() {
  return (
    <div className="image">
      {pizzaData.map((task) => {
        return (
          <Info
            photoName={task.photoName}
            dishName={task.name}
            ingredients={task.ingredients}
            num={task.price}
            t={task.soldOut}
          />
        );
      })}
    </div>
  );
}
function Info(props) {
  return (
    <div className="img-info" style={{ color: props.t ? "gray" : "black" }}>
      <div>
        <img
          style={{ filter: props.t ? "grayscale(100%)" : "grayscale(0%)" }}
          src={props.photoName}
          alt={props.Name}
        />
      </div>
      <div className="discription">
        <h3>{props.dishName}</h3>
        <p>{props.ingredients}</p>
        {props.t ? <p>soldOut</p> : <p>{props.num}</p>}
      </div>
    </div>
  );
}
function Time() {
  const date = new Date().getHours();
  const check = date > 8 && date < 22;
  console.log(date);
  const openTime = 8;
  const closeTime = 22;

  return (
    <div className="time">
      {check ? (
        <p>
          {" "}
          welcome to our restaurants we'ar open from 8 to 22:00 come visit us or
          order online{" "}
        </p>
      ) : (
        <p>we'ar open from 8 to 22:00 come visit us or order online </p>
      )}
      <button>order</button>
    </div>
  );
}
