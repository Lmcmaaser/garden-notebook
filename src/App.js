import React, { Component } from 'react';
import './App.css';
import Split from './Split.js';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <main className='main'>
                    <Split className='left'>
                        This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
                    </Split>
                    <Split className='right' flexBasis={2}>
                        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
                    </Split>
                </main>
            </div>
        );
    }
}
