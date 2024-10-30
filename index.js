// Object
// For each
async function displayData() {
  const giphyApi = "JS7RLP6zovh87cEy8p2C6i6Wv8yesQm4"
  const endPintGet = "https://api.giphy.com/v1/gifs/search?api_key=JS7RLP6zovh87cEy8p2C6i6Wv8yesQm4&q=book&limit=35&offset=1&rating=pg&lang=en&bundle=messaging_non_clips"
  
  const endPintGet2 = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApi}&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  
  try {
    const response = await fetch (endPintGet)
    let data = await response.json()
      data.data.forEach(element => {
        let newImage = document.createElement ("img")
        // Add code
      });
  } catch {

  } 

  fetch(giphyApi)
  .then(response => {
    if (!response.ok) throw new Error("Error");
    return response.json();
  })
  .then(data => {
    data.data.forEach(element => {
           // Add code
    });
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
}


