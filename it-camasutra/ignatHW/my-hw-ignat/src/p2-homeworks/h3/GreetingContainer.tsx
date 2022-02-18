import React , {useState , ChangeEventHandler , ChangeEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
    disabled: boolean
}
// type ButtonType = {
//
// }

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users , addUserCallback , disabled}) => { // деструктуризация пропсов
    const [name , setName] = useState<string>('') // need to fix any
    const [error , setError] = useState<string>('') // need to fix any
    const [btnState , unableBtn] = useState<boolean>(true)
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        unableBtn(false)
    }
    const addUser = () => {
        // need to fix
        if (!name.trim()) {
            setError('incorrect')
        } else {
            alert(`Hello ${name.trim()} !`)
            addUserCallback(name.trim())
            setName('')
            setError('')
            unableBtn(true)
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            disabled={btnState}
        />
    )
}

export default GreetingContainer
