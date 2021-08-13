import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Blog from "./components/Blog";
import { UserProvider } from "./components/GlobalContext";
import "./css/App.css";
import Contact from "./components/Contact";
import ModalComponent from "./components/Modal";
import SingleBlog from "./components/singleBlog";
import BlogProvider from "./components/CreatePosts";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <BlogProvider>
            <Nav />
            <Switch>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route path="/login" component={Login} />

              <Route exact path="/">
                <ModalComponent text={"Add Post"} />
                <Blog />
              </Route>
              <Route exact path="/blog/:id">
                <SingleBlog />
              </Route>
            </Switch>
          </BlogProvider>
        </UserProvider>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;
