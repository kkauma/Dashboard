export default function OpenWeather() {
  const callAPI = async () => {
    try {
      const res = await fetch(
        "https://api.openweathermap.org/data/3.0/onecall?lat=37.4636&lon=122.4286&appid={}"
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={callAPI}>Make API Call</button>
    </div>
  );
}
