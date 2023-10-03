import { React } from "react"

const TabelaBody = (props) => (
    <tbody>
        {/* <td>978-888-999-5</td>
        <td>CSS Grid Layout</td>
        <td>Mauricio Samy</td>
        <td>
            <button className="botao remover">Remover</button>
        </td> */}

        {/* front-end
        back-end
        full-stack */}
        {props.livros.map((livro, index) => ( //sintaxe JSX
            <tr key={livro.id}>
                <td>{livro.id}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>
                    <button
                        className="botao remover"
                        onClick={() => props.removerLinha(livro.id)}
                    >
                        Remover
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
);

export default TabelaBody;