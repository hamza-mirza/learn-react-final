import React from "react"

import Greetings from "./components/Greetings"
import Counter from "./components/Counter"

class App extends React.Component {
  state = {
    count: 0
  }
  increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 })
  }
  resetCount = () => {
    this.setState({ count: 0 })
  }
  render() {
    return (
      <>
        <Greetings title="Good Morning!" message="It is a beautiful day"/>
        <Counter 
          increaseCount={this.increaseCount} 
          decreaseCount={this.decreaseCount} 
          resetCount={this.resetCount} 
          count={this.state.count}
        />
      </>
    )
  }
}

export default App