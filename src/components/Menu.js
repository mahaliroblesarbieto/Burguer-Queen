import React from 'react';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/developer/src/data/menu.json')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {items.map(item => (
          <div>
            {item.name}
            {item.value}
            <button type="button">+</button>
          </div>
        ))}
      </div>
    );
  }
}
export default Menu;