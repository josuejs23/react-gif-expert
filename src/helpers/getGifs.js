export const getGifs = async(category) =>{
    const baseUrl ='https://api.giphy.com/v1/gifs/search'
    const apiKey = 'uhHNqtMyS9oyRi89AK23LcArahxIl7qQ'
    const limit = 10;
    const url = `${baseUrl}?api_key=${apiKey}&q=${category}&limit=${limit}`

    const response = await fetch(url);
    const { data } = await response.json()
    const miniData = data.map((gif)=> ( 
        { 
            id : gif.id,
            title : gif.title, 
            url : gif.images.downsized_medium.url
        }))
    return miniData;
}