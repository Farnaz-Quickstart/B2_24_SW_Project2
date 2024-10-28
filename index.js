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
        newImage.src = element.images.original.url
        newImage.className = "giphy_img"
        console.log (newImage)

        let section_image = document.getElementById ("section_image")
        section_image.appendChild (newImage)
        console.log (section_image)
      });
  } catch {

  } 

  fetch(giphyApi)
  .then(response => {
    // Handle response and convert to JSON
    if (!response.ok) throw new Error("Network response was not ok.");
    return response.json();
  })
  .then(data => {
    // Loop through each GIF and create an image element
    data.data.forEach(element => {
      const newImage = document.createElement("img");
      newImage.src = element.images.original.url;
      newImage.className = "giphy_img";

      const section_image = document.getElementById("section_image");
      section_image.appendChild(newImage);
      console.log(newImage);
    });
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
}


