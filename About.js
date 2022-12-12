import { Link } from "react-router-dom";
const About =()=>{
  return(
      <div className="Page2">
        <h2>Welcome</h2>
        <p>this is the about page</p>
      <nav>
      <button className="Mybutton"><Link to="/">Home</Link></button>
      </nav>
      </div>
);
}
export default About