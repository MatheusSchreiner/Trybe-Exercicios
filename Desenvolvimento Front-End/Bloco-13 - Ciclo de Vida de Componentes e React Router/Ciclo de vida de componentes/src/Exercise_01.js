import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((result) => this.setState({ data: result }));
  }

  render() {
    const { data } = this.state;
    if (data === '') return <h1>loading...</h1>;

    return (
      <div>
        <p>Doguinhos</p>
        <button type="button" onClick={ this.fetchDog }>
          Novo doguinho!
        </button>
        <div>
          <img src={ data.message } alt="Random dog" />
        </div>
      </div>
    );
  }
}

export default App;
