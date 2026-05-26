import post from "../Views/publicacion.html"

const getpost = async () => {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await reponse.json()
}

export default async () => {

    const post_views = document.createElement('div')

    post_views.innerHTML = post

    const elementpost = post_views.querySelector('#post')

    const reponse_post = await getpost()

    reponse_post.forEach(post => {

        elementpost.innerHTML += `
        <li style="list-style: none;color:white">
            <h5>${post.title}</h5>
            <p>${post.body}</p>
        </li>
        `
    })

    return post_views
}