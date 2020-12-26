import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi/';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import logoImg from '../../assets/svg/logo.svg';

import {Title, Form, Repositorys, Error } from './styled';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');

    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storageRepositories = localStorage.getItem('@hithubExplorer:repositories');

        if (storageRepositories) {
            return JSON.parse(storageRepositories);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('@hithubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>):Promise<void> {
        event.preventDefault();
        
        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);
        
            const repository = response.data;
            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (error) {
            setInputError(
                'Erro na busca por esse repositório, verifique se esta informando o autor/nome correto'
            );
        }
        
    }
    
    return (
        <>
            <img src={logoImg} alt="Github explorer" />
            <Title>
                Explore repositórios no GitHub
            </Title>
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    placeholder="Digite o nome do repositório"
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>
            { inputError && <Error>{inputError}</Error> }
            <Repositorys>
            {repositories.map(repository => (
                <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            ))};
            </Repositorys>
        </>
    );
}

export default Dashboard;