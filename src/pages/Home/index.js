import React, { useState } from "react";
import axios from 'axios';
import * as S from './styled';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App(props) {
    // const history = useHistory();
    let navigate = useNavigate();
    const [ usuario, setUsuario ] = useState('');
    const [ erro, setErro ] = useState(false);

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`)
        .then(response => {
            const repositories = response.data;
            const respositoriesName = [];
            // console.log(response.data);
            // console.log(JSON.stringify(repositories));
            repositories.map((repository) => {
                respositoriesName.push(repository.name);
            });
            // console.log(respositoriesName);
            localStorage.setItem('repositoriesName', JSON.stringify(respositoriesName));
            // history.push('/repositories');
            setErro(false);
            navigate('/repositories');
        })
        .catch(erro => {
            setErro(true);
        });
    }

    return (
        <S.HomeContainer>
            <S.Content>
                <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
                <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
            </S.Content>
                {erro ? <S.ErrorMsg>Ocorreu um erro, tente novamente.</S.ErrorMsg> : '' }
        </S.HomeContainer>
    )
}

export default App;