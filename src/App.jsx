import { useState } from "react"

function App(){

const [nome, setNome] = useState('Ronaldo')

const Formulario = () => {
  return (
    <>
    <h3>Formulario</h3>

    <input 
      className="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      type="text" />

      <button
      className="botao"
      
      onClick={()=>{alert(nome)}}
      >
        CLIQUE AQUI
      </button>

    </>
  )
}

  return (
    <div>
      <h3>Pizzaria2D</h3>

      <Formulario/>
      <Formulario/>
      <Formulario/>
      <Formulario/>
      <Formulario/>
      
    
    </div>
  )
}

export default App