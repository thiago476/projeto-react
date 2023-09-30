import { React } from "react"

//const TabelaBody = () =>
const TabelaBody = (props) => (
    <tbody>
        {props.livros.map( (livro, index) => (
            <tr key = {livro.id}>
                <td>{livro.id}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>{livro.preco}</td>
                <td>
                    <button
                        className="botao remover"
                        onClick={ () => props.removerLinha(livro.id)}>Remover</button>
                </td>
            </tr>
        ))}
    </tbody>
)



            