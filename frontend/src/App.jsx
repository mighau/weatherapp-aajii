import React, { useEffect, useState } from 'react';
import weatherService from './services/weatherService';
import locationService from './services/locationService';

const App = () => {
  const [info, setInfo] = useState({});
  const [location, setLocation] = useState({
    //Default: Helsinki
    latitude: 60.1733244,
    longitude: 24.9410248,
    city: 'Helsinki,fi',
  });

  useEffect(() => {
    const fetchLocation = async () => {
      const coordinates = await locationService.getCoordinates;
    };
    fetchLocation();
  }, []);
};

useEffect(() => {
  const fetchWeather = async () => {
    setBlogs(await weatherService.getWeatherFromApi());
  };
  fetchWeather();
}, []);

class App extends React.Component {
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

export default App;
