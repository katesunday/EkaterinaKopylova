
export type StatePropsType = {
    profilePage: {
        posts: Array<PostDataPropsType>
    }
    dialogsPage: {
        messages: Array<MessageDataPropsType>,
        dialogs: Array<DialogsDataPropsType>
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
const state:StatePropsType = {
    profilePage: {
        posts: [
            {id: 1 , message: "Hi,how are you?" , likeAmount: 15} ,
            {id: 2 , message: "It's my first post!" , likeAmount: 20} ,
        ] ,
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
}

export default state