import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';





class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount() { // get data from  => here
    fetch('https://raw.githubusercontent.com/franciscomelov/catalogoChips/master/src/chipsList.json') //httmps error
      .then(response => response.json())
      .then(chipsList => this.setState({ robots: chipsList }))
  }



  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobot = this.state.robots.filter(robot => {
      return (
        robot.codigo.toString().toLowerCase().includes(searchfield.toString().toLowerCase()) ||
        robot.carro.toString().toLowerCase().includes(searchfield.toString().toLowerCase())
      )
    })
    return !robots.length ?
      <h1>Loading...</h1> :
      (
        <div className="tc">
          <h1 className="f2 ">ROBOFRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange} />

          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobot} />
            </ErrorBoundry>
            {console.log(typeof(searchfield),searchfield)}
            {console.log(filteredRobot)}

          </Scroll>

        </div>
      );

  }

}



export default App;