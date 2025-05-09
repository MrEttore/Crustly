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
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Search order #"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-28 rounded-xl bg-red-50 px-4 py-2 text-sm font-normal text-[#ab4343] outline-none transition-all duration-300 focus:ring focus:ring-[#ab4343] focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
            ></input>
        </form>
    );
}
