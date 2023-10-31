import React from 'react';

// импорт компонента Category
import Category from './components/category/Category';
import Food from './components/other/Food';
import Sport from './components/other/Sport';
import Categories from './pages/Categories';

class App extends React.Component {

  state = {
    count: 0
  };

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  constructor(props) {
    super(props);
    // теперь перед state нужно обязательно написать this
    this.state = {
      count: 0,
    };
    // делаем привязку к функции контекста this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return <div>
      <div>
        <button onClick={this.handleClick}>+</button>
        <div>Счётчик {this.state.count}</div>
        <Category key="1" id="1" style={this.props.style ? this.props.style : { color: "blue" }} content="Категория 1">
          <b>Описание категории</b>
        </Category>
        <Category key="2" id="2" content="Категория 2" />
        <Category key="3" id="3" content="Категория 3" />
        <br />
      </div>
      <div>
        <Food key="1" id="1" style={{ color: "yellow" }} content="Суп" />
        <Food key="1" id="1" style={{ color: "green" }} content="Горячее" />
        <Food key="1" id="1" style={{ color: "blue" }} content="Десерты" />
        <br />
      </div>
      <div>
        <Sport key="1" id="1" style={{ color: "blue" }} content="Плавание" />
        <Sport key="1" id="1" style={{ color: "magenta" }} content="Футбол" />
        <Sport key="1" id="1" style={{ color: "orange" }} content="Баскетбол" />
        <br />
      </div>
      <Categories />
    </div>
  }
}



export default App;