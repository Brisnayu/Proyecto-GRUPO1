export let destinations = [];

export const getDestinations = async () => {

      const res = await fetch(`${import.meta.env.VITE_API_URL}/destinations`);
      const data = await res.json();
      destinations = data;
     return destinations
    };