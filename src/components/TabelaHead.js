import React from "react"

const TabelaHead = props => (
    <thead>
        <tr className="topo">
            <th colSpan= "4" className="titulo"> Tabela de livros</th>
        </tr>
        <tr className="indice">
            <th className="th"> ISBN </th>
            <th className="th"> Título 
                <div className = 'container-setlinhas'>
                    <div id="setaCima" onClick={()=>props.organizarTabelaCrescente("titulo")}>&#129093;</div>
                    <div id="setaBaixo" onClick={()=>props.organizarTabelaDecrescente("titulo")}>&#129095;</div>
                </div>
            </th>
            <th className="th"> Autor </th>
        </tr>
    </thead>


)


export default TabelaHead