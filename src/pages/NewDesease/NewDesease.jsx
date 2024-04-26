import './newDesease.css'
import Menu from '../../components/menu/menu'
import Input from '../../components/input/Input'
import Tag from '../../assets/tag.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from "../../services/api";

const NewDesease = () => {
    class Doenca {
        constructor(name, image, description, symptoms, treatment) {
            this.name = name;
            this.image = image;
            this.description = description;
            this.symptoms = symptoms;
            this.treatment = treatment;
        }
    }

    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    const [description,setDescription] = useState('')
    const [symptoms,setSymptoms] = useState('')
    const [treatment,setTreatment] = useState('')
    const navigate = useNavigate()

    const handleName = (name) => {
        setName(name)
    }

    const handleImage = (image) => {
        setImage(image)
    }

    const handleDescription = (description) => {
        setDescription(description)
    }

    const handleSymptoms = (symptoms) => {
        setSymptoms(symptoms)
    }

    const handleTreatment = (treatment) => {
        setTreatment(treatment)
    }

    const submitDados = (name, image, description, symptoms, treatment) => {
        console.log(`Doença: ${name} | url imagem: ${image} | Descrição: ${description} | Sintomas: ${symptoms} | Tratamento: ${treatment}`);

        const newDesease = new Doenca(name, image, description, symptoms, treatment);
        JSON.stringify(newDesease);

        api.post('/doencas', newDesease).then((response)=>{
            console.log(response.data)
            console.log("Cadastro realizado!")            
        })

    }

    return (
        <>
            <div className="container_novo_usuario">
                <Menu/>
                <div className="page_novo_usuario_container">
                    <div className='card_novo_usuario_container'>
                        <h1 className='card_novo_usuario_title'>Nova Doença</h1>
                        <form className='card_novo_usuario_inputs' action="">
                            <p>Preencha os campos abaixo para cadastrar_</p>
                            <Input img={Tag} inputType='text' msg='nome da doença' value={name} handleInput={handleName}/>
                            <Input img={Tag} inputType='text' msg='url com imagem da doença' value={image} handleInput={handleImage}/>
                            <Input img={Tag} inputType='text' msg='Breve descrição da doença' value={description} handleInput={handleDescription}/>
                            <Input img={Tag} inputType='text' msg='Sintomas' value={symptoms} handleInput={handleSymptoms}/>
                            <Input img={Tag} inputType='text' msg='Possui Tratamento?' value={treatment} handleInput={handleTreatment}/>
                        </form>
                        <button className='card_button' onClick={()=>submitDados(name, image, description, symptoms, treatment)}>Cadastrar</button>
                        <button className='card_button' onClick={()=>navigate("/logged")}>Voltar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewDesease;