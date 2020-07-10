import React from "react";
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/launch">Launch</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/">Men</Link>
        <Link to="/">Women</Link>
        <Link to="/">Sports</Link>
      </nav>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="launch" element={<Launch />}>
            <Route path="/" element={<LaunchIndex />}/>
            <Route path=":slug" element={<LaunchShoe />} />
            </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!!!!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}


function Launch() {

  return (
      <div>
          <h1>Let's start online shopping </h1>
          <Outlet />
      </div>
  );
}


function LaunchIndex() {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};