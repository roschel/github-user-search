import Button from 'core/components/Button';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react'
import ProductDescriptionLoader from './components/Loaders/ProductDescriptionLoader';
import ProductInfoLoader from './components/Loaders/ProductInfoLoader';
import './styles.css'

type FormData = {
    login: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
    company: string;
    blog: string;
    location: string;
    created_at: string;
}

const UserSearch = () => {
    const [userName, setUserName] = useState('');
    const [responseApi, setReponseApi] = useState<FormData>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setUserName(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true)
        makeRequest({ url: `/${userName}` })
            .then(response => setReponseApi(response.data))
            .finally(() => {
                setIsLoading(false)
            })

    }


    return (
        <div>
            <div className="bloco">
                <form onSubmit={handleSubmit}>
                    <div className="title">Encontre um perfil Github</div>
                    <input
                        className="search-field"
                        type="text"
                        value={userName}
                        onChange={handleOnChange}
                        placeholder="Usuário GitHub"
                    />
                    <Button text="Encontrar" />
                </form>
            </div>

            {responseApi &&

                <div className="user-details">
                    <div className="wrapper">
                        {isLoading ? <ProductInfoLoader /> : (
                            <>
                                <div className="user-img">
                                    <img src={responseApi?.avatar_url} alt={responseApi?.login} />
                                </div>
                            </>
                        )}

                        {isLoading ? <ProductDescriptionLoader /> : (
                            <>

                                <div className="user-repos">
                                    <label className="repos-text">
                                        Repositórios públicos: {responseApi?.public_repos}
                                    </label>
                                </div>
                                <div className="user-followers">
                                    <label className="followers-text">
                                        Seguidores: {responseApi?.followers}
                                    </label>
                                </div>
                                <div className="user-following">
                                    <label className="following-text">
                                        Seguindo: {responseApi?.following}
                                    </label>
                                </div>

                                <div className="infos">
                                    <div className="info-title">
                                        Informações
                            </div>
                                    <div className="info-block">
                                        Empresa: {responseApi.company}
                                    </div>
                                    <div className="info-block">
                                        Website/Blog: {responseApi.blog}
                                    </div>
                                    <div className="info-block">
                                        Localidade: {responseApi.location}
                                    </div>
                                    <div className="info-block">
                                        Membro desde: {responseApi.created_at}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <a href={responseApi.html_url} target="_blank" rel="noreferrer" className="text-link">
                        <Button text="Ver perfil" />
                    </a>

                </div>

            }
        </div>
    )
}

export default UserSearch