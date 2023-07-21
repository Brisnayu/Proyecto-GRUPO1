export const fetchDestinations = () => {
    let destinations = [];
      const getData = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/destinations`);
  
        const data = await res.json();
        return data;
      };
      getData()
        .then((data) => {
            destinations = data;
        console.log(destinations)
    })
        .catch((error) => console.log('Destinations not found', error));
  };