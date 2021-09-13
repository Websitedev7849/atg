import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import PostCategory from "./components/PostCategory";
import PostBody from "./components/PostBody";
import GetLocation from "./components/GetLocation";
import SignUp from "./components/SignUp";


function App() {

  const posts = [
    {
      post: "./images/post 1.png",
      cardTitle: "✍️ Article",
      article: " What if famous brands had regular fonts? Meet RegulaBrands! ",
      textMuted: "I’ve worked in UX for the better part of a decade. F..",
      personPhoto: "./images/person1.png",
      name: "Sarthak Kamra",
      views: "1.4k views"
    },
    {
      post: "./images/post 2.png",
      cardTitle: "🔬️ Education",
      article: "Tax Benefits for Investment under National Pension Scheme launched by Government",
      textMuted: "I’ve worked in UX for the better part of a decade. F..",
      personPhoto: "./images/person2.png",
      name: "Sarah West",
      views: "4.8k views"
    }
  ]

  return (
    <div className="App container-fluid">
      <Header/>

      <section className="container-fluid px-xl-5 mx-xl-3 d-flex flex-column postBody position-relative">
       
       <PostCategory />

       <PostBody info = {posts[0]} />
       <PostBody info = {posts[1]} />

       <GetLocation />

      </section>

      <Router>
        <Switch>

          <Route path="/signup" exact >
            <div className="position-fixed top-0 start-0 container-fluid darkLayer"></div>
            <SignUp />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
