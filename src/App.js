import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Split from './Split.js';
import Home from './Home/Home.js';
import LandingPage from './LandingPage/LandingPage.js'

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <nav></nav>
                <header></header>
                <main className='main'>
                    <Split className='left'>
                        This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
                    </Split>
                    <Split className='right' flexBasis={2}>
                        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
                    </Split>

                    <Route exact path='/' component={LandingPage}/>
                    <Route path='/home' component={Home}/>
                </main>
                <footer></footer>
            </div>
        );
    }
}
