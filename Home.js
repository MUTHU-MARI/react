import { Link } from "react-router-dom";
const Home=()=>{
  return(
      <div className="Page1">
      <main>
        <h2>Welcome to homepage</h2>
        <p>I believe in you</p>
      </main>
      <nav>
      <button className="Mybutton"><Link to="/about">About</Link></button>
      </nav>
      </div>
);
}
export default Home