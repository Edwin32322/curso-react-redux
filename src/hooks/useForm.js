import { useState } from "react"
import { helpHttp } from "../helpers/helpHttp"

export const useForm = (initialForm, validateForm = () => { }) => {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(form))
        if (Object.keys(errors).length === 0) {
            alert("Enviando Formulario")
            setLoading(true)
            console.log(form)
            helpHttp().post("https://formsubmit.co/ajax/edwincastellanos150@gmail.com", {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                body: JSON.stringify(form)
            })
                .then(() => {
                    setLoading(false)
                    setResponse(true)
                    handleReset(initialForm)
                    setTimeout(() => {
                        setResponse(false)
                    }, 5000)
                })
        }
    }
    const handleReset = (initialForm) => {
        setForm(initialForm)
    }
    return { form, errors, loading, response, handleBlur, handleSubmit, setForm, handleChange, handleReset }
}
