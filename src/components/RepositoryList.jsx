import { useState, useEffect } from 'react';
import '../styles/repositories.scss';
import { RepositoryItem } from "./RepositoryItem";
import { Form } from "./Form";

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    const type = "orgs";
    const user = "rocketseat"

    useEffect(() => {
        fetch(`https://api.github.com/${type}/${user}/repos`)
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <hr />
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return (<RepositoryItem key={repository.name} repository={repository} />)
                })}

            </ul>

        </section>
    )
}