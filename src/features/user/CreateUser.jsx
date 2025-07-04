import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';
import { updateName } from './userSlice';

function CreateUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!username) return;

        dispatch(updateName(username));
        navigate('/menu');
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
            <p className="mb-4 text-base font-light text-cream md:text-lg">
                Please, start by telling us your name:
            </p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input mb-8 w-72"
            />

            {username !== '' && (
                <div>
                    <Button type="primary">Start ordering</Button>
                </div>
            )}
        </form>
    );
}

export default CreateUser;
