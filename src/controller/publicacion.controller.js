import post from "../Views/publicacion.html"
const getpost =  async () =>{
   const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
   return await reponse.json()
}
export default async () =>{
    const post_views = document.createElement('div')
    post_views.innerHTML = post
    const elementpost =  post_views.querySelector('#post')
    getpost.foreach(post =>{
        post_views.innerHTML += 
    })
    return post_views
}