import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return;

        navigate(`/order/${query}`);
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <input
                placeholder="Search order #"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-28 rounded-xl bg-cream px-4 py-2 text-base font-normal text-primary-dark outline-none transition-all duration-300 focus:ring-2 focus:ring-gold focus:ring-opacity-70 sm:w-64 sm:focus:w-72 shadow-elegant border border-gold/30 placeholder:text-stone-400"
            ></input>
        </form>
    );
}
