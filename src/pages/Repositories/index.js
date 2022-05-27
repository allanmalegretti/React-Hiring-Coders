import React, { useEffect, useState } from "react";
import * as S from './styled';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Repositories() {
    // const history = useHistory();
    let navigate = useNavigate();
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        // console.log(repositoriesName);
        if(repositoriesName != null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            // localStorage.clear();
        } else {
            // history.push('/repositories');
            navigate('/');
        }
    }, []);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {repositories.map(repository => {
                    return (
                        <S.ListItem>Repositório: {repository}</S.ListItem>
                    )
                })}
            </S.List>
            {/* <a href="/">Voltar</a> */}
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}