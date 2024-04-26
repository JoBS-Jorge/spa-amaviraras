import './cardDoenca.css'

const CardDoenca = (doenca) => {
    const novaDoenca = doenca

    return (
        <>
            <div className="card-container">
                <a href="#" className="image-container">
                    <img className="image-doenca" src={novaDoenca.doenca.image} alt="imagem doença"/>
                </a>
                <div className="main-content">
                    <h1><a href="#">{novaDoenca.doenca.name}</a></h1>
                    <p>{novaDoenca.doenca.description}</p>
                    <div className="card-adicional-infos">
                        <div className="card-adicional-infos_sintomas">
                            <img src="https://cdn-icons-png.flaticon.com/512/2779/2779884.png" alt="icone sintomas" className="small-image"/>
                            <p>Sintomas: {novaDoenca.doenca.symptoms}</p>
                        </div>
                        <div className="card-adicional-infos_tratamento">
                            <img src="https://cdn-icons-png.flaticon.com/512/3481/3481686.png" alt="icone tratamento" className="small-image"/>
                            <p>Possui tratamento? {novaDoenca.doenca.treatment?<>Sim</>:<>Não</>}</p>
                        </div>
                    </div>
                </div>
                <div className="card-attribute">
                    {novaDoenca.doenca.type==="Genética"?
                    <><img src="https://www.coherent.com/content/dam/coherent/site/en/solutions/life-sciences-and-medical/bioinstrumentation/dna-sequencing/dna-sequencing-h1-950x950.jpg" alt="avatar" className="small-avatar"/></>:
                    <><img src="https://img.freepik.com/fotos-premium/resumo-fundo-vermelho_196038-24212.jpg" alt="avatar" className="small-avatar"/></>
                    }                    
                    <p>Doença do tipo <span><a href="#">{novaDoenca.doenca.type}</a></span></p>
                </div>
            </div>
        </>
    )
}

export  default CardDoenca;