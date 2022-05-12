import React from "react";
import { postItems } from "../../api/config";
import Field from "../Field/Field";
import "./Form.css"

const Form = ({addNewCard}) => {
    const [title, setTitle] = React.useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newItem = await postItems({title})
        addNewCard(newItem)    
        setTitle('')
    }
    return (
        <form className="form" onSubmit={handleSubmit}>    
            <Field title={title} setTitle={setTitle}/>   
        </form>
    )
}

export default Form
