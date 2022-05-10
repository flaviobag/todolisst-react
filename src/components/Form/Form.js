import React from "react";
import Field from "../Field/Field";
import "./Form.css"

const Form = ({addNewCard}) => {
    const [title, setTitle] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addNewCard({id:4, title})    
        title('')
    }
    return (
        <form className="form" onSubmit={handleSubmit}>    
            <Field title={title} setTitle={setTitle}/>   
        </form>
    )
}

export default Form
