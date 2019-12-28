import React from 'react';
import './App.css';
import { Button, Layout } from 'antd';
import Navbar from './components/NavigationBar';
import Sidebar from './components/SideBar';
import Topics from './components/CRUD';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Categories from './components/CRUD/category';
import BlogCard from './components/Card';
import BlogContent from './components/Content';
import ImageCarousel from './components/React Slick/index';
import Responsive from './components/React Slick/index1';
import CustomCard from './components/Card/index1';
import CardModal from './components/Card/CardModal';

const { Content, Sider } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/*<Route exact path="/" render={ props => (<Categories {...props} loggedInStatus={this.state.loggedInStatus} />)} />*/}
        {/*<Route exact path="/login" component={LoginForm} />*/}
        {/*<Route exact path="/signup" component={SignUpForm} />*/}
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/categories/topics" component={Topics} />
        {/*<Route exact path="/categories/topics/add" component={AddTopics} />*/}
        {/*<Route exact path="/categories/topics/edit" component={EditTopics} />*/}
        {/*<Route exact path="/categories/edit" component={CategoryTable} />*/}
        {/*<Route exact path="/categories/topics/comment" component={CommentPage} />*/}
        {/*<Route exact path="/categories/topics/comment/rate" component={Modals} />*/}
        <Categories />
        {/*<BlogCard />*/}
        {/*<BlogContent />*/}
        {/*<ImageCarousel />*/}
        {/*<Responsive />*/}
        {/*<CustomCard />*/}
        {/*<CardModal />*/}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
