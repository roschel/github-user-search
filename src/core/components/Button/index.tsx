import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => {
    const history = useHistory();

    const handleRoute = () => {
        history.push('/search')
    }
    
    return (
        <button 
            className="generic-button"
            onClick={handleRoute}
        >
            <div className="text">
                {text}
            </div>
        </button>
    )
}

export default Button;
