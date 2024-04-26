import React, { useEffect, useState } from "react";
import Menu from '../../components/menu/menu';
import './catalogoStyles.css';
import Lupa from '../../assets/search.svg';
import Input from "../../components/input/Input";

import CardDoenca from '../../components/card_doenca/card_doenca';
import { api } from "../../services/api";

const Catalogo = () => {

    const [doencas, setDoencas] = useState([]);
    const [search,setSearch] = useState('')

    const handleSearch = (currentSearch) => {
        setSearch(currentSearch)
    }

    const handleSearchDoencas = () => {
        if(search === ''){
            api.get('/doencas').then((response)=>{
                setDoencas(response.data);
            })
        }else{
            api.get('/doencas').then((response)=> {
                setDoencas(response.data.filter(doenca => doenca.name.includes(search)))
            });
        }  
        
    };

    async function loadDoencas(){
        api.get('/doencas')
        .then((response) => setDoencas(response.data));
    }

    useEffect(()=>{
        loadDoencas()
    } ,[])

    useEffect(()=>{
        api.get('/doencas').then((response)=> {
            setDoencas(response.data.filter(doenca => doenca.name.includes(search)))
        });
    } ,[search])    

    return (
        <>
            <div className="container">
                <Menu isLoge="false"/>
                <div className="search_container">
                    <div className="input_search_container">
                        <Input img={Lupa} inputType='text' msg='nome' value={search} onChange={handleSearchDoencas} handleInput={handleSearch}/>  
                        <button className="search_button" onClick={handleSearchDoencas}>pesquisar</button>
                    </div>

                    <div className="catalogo_container">
                        <h1>Catalogo de doenças</h1>
                        <div className="cards_list">

                            {doencas.map(doencas => {
                                return (
                                    <>
                                        <CardDoenca doenca={doencas}/>  
                                    </>
                                )
                                
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Catalogo;