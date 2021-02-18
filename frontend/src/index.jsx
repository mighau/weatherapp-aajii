import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.log(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: '',
    };
  }

  async componentDidMount() {
    const weather = await getWeatherFromApi();

    this.setState({
      icon: weather.icon.slice(0, -1),
      text: weather.description,
    });
  }

  render() {
    const { icon, text } = this.state;
    return (
      <div className="icon">
        <h2 align="center">TODAYS WEATHER</h2>
        {text && <h3 align="center">{text}</h3>}
        {icon && <img src={`/img/${icon}.svg`} alt={`Icon for "${text}"`} />}
      </div>
    );
  }
}

ReactDOM.render(<Weather />, document.getElementById('app'));
