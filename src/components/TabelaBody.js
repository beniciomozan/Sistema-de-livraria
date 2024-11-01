import React from "react"

const TabelaBody = props => (
  
    <tbody>
        
        {props.livros.map((livro,index) => (
            <tr key={livro.id}>
                <td className="corpo">{livro.id}</td>
                <td className="corpo">{livro.titulo}</td>
                <td className="corpo">{livro.autor}</td>
                <td className="corpo">
                    <button className="button" onClick={()=>props.removerLinha(livro.id)}>Remover</button>
                </td>
            </tr>
        ))}
    </tbody>

)


export default TabelaBody;