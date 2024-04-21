export const getPosts = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/photos',{method : 'GET'})
    return response.json()
}