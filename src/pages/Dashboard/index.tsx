import React from 'react';
import { FiChevronRight } from 'react-icons/fi/';

import logoImg from '../../assets/svg/logo.svg';

import {Title, Form, Repositorys } from './styled';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github explorer" />
            <Title>
                Explore repositórios no GitHub
            </Title>
            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositorys>
                <a href="teste">
                    <img src="https://avatars2.githubusercontent.com/u/32890216?s=460&u=aa95c563cc5ed5e79253d147386f59c68bb256cf&v=4" alt="David Freitas"/>
                    <div>
                        <strong>David Working</strong>
                        <p>Hi there 👋</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img src="https://avatars2.githubusercontent.com/u/32890216?s=460&u=aa95c563cc5ed5e79253d147386f59c68bb256cf&v=4" alt="David Freitas"/>
                    <div>
                        <strong>David Working</strong>
                        <p>Hi there 👋</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img src="https://avatars2.githubusercontent.com/u/32890216?s=460&u=aa95c563cc5ed5e79253d147386f59c68bb256cf&v=4" alt="David Freitas"/>
                    <div>
                        <strong>David Working</strong>
                        <p>Hi there 👋</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositorys>
        </>
    );
}

export default Dashboard;