const initState = {
    posts: [
        {id: "1", title: "Squirtle Laid an Egg", body: "lorem ipsum"},
        {id: "2", title: "Charmander laid an egg", body: "lorem ipsum"},
        {id: "3", title: "a Helix fossil was Found", body: "lorem ipsum"}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer