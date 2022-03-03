let renderEntireTree = () =>{
    console.log('state changed')
}

export type StatePropsType = {
    profilePage: {
        posts: Array<PostDataPropsType>
        newPostText:string

    }
    dialogsPage: {
        messages: Array<MessageDataPropsType>,
        dialogs: Array<DialogsDataPropsType>
    }
    sideFriendsBarPage:{
        friendItems:Array<SideFriendsBarPropsType>
    }

}
export type PostDataPropsType = {
    id:number
    message:string
    likeAmount:number
}
export type DialogsDataPropsType = {
    id:number
    name:string
}
export type MessageDataPropsType = {
    id:number
    message:string
}
export type SideFriendsBarPropsType = {
    name:string
    img: string
}
const state:StatePropsType = {
    profilePage: {
        posts: [
            {id: 1 , message: "Hi,how are you?" , likeAmount: 15} ,
            {id: 2 , message: "It's my first post!" , likeAmount: 20} ,
        ] ,
        newPostText: 'it-camasutra.by',
    },
    dialogsPage: {
        dialogs: [
            {id: 1 , name: 'Kate'} ,
            {id: 2 , name: 'Philip'} ,
            {id: 3 , name: 'Mama'} ,
            {id: 4 , name: 'Tanya'} ,
            {id: 5 , name: 'Anna'} ,
        ] ,
        messages: [
            {id: 1 , message: 'Hello'} ,
            {id: 2 , message: 'Hooray'} ,
            {id: 3 , message: 'studying?'} ,
            {id: 4 , message: 'I learn JS!'} ,
            {id: 5 , message: 'How are you?'} ,
        ]
    },
    sideFriendsBarPage: {
        friendItems: [
            {name: 'Sasha', img: 'https://media.istockphoto.com/vectors/cute-surprised-cat-round-icon-emoji-gray-cat-with-whiskers-mouth-open-vector-id1203518848'},
            {name: 'Masha' , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3x2D7eP09Im1N0At7wSKWnZQKWQIXOjJfRA&usqp=CAU'},
            {name: 'Dasha', img: 'https://media.istockphoto.com/vectors/round-button-for-web-icon-gamer-girl-avatar-retro-button-banner-round-vector-id1247154889'},
        ]
    }
}
export const addPost = () => {
    let newPost = {
        id:6,
        message:state.profilePage.newPostText,
        likeAmount:0,
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree()
    state.profilePage.newPostText = ''
}
export const updateNewPostChange = (newText:string) => {
  state.profilePage.newPostText = newText
    renderEntireTree()
}
export const subscribe = (observer:()=>void)=>{
    renderEntireTree = observer
}
export default state