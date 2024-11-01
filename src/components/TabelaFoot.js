import React from 'react';

const TabelaFoot = (props) => (
    <tfoot className='rodape'>
        <tr>
            <td colSpan="4">Quantidade de livros na tabela: {props.qdelivros}</td>
        </tr>
    </tfoot>
)
export default TabelaFoot;