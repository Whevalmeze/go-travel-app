console.log("Here i am")


      // useEffect(() => {
      //   if (location.trim() !== "") {
      //     const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
      //     const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${searchQuery}`;
      //     const options = {
      //       method: "GET",
      //       headers: {
      //         "X-RapidAPI-Key": API_KEY,
      //         "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      //       },
      //     };

      //     fetch(url, options)
      //       .then((response) => response.json())
      //       .then((result) => {
      //         console.log(result.data);
      //         setDestinations(result.data);
      //       })
      //       .catch((error) => {
      //         console.error("Error fetching data:", error);
      //       });
      //   }
      // }, [searchQuery]);