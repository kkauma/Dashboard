// interface Astronaut {
//   name: string;
// }

// export default function OpenNotify(): Promise<Astronaut[]> {
//   return fetch("http://api.open-notify.org/astros.json").then((res) =>
//     res.json()
//   );
// }

export default function OpenNotify() {
  const callAPI = async () => {
    try {
      // Call the Open Notify API
      const res = await fetch("http://api.open-notify.org/astros.json");
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
