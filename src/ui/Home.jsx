import { useSelector } from 'react-redux';

import CreateUser from '../features/user/CreateUser';
import Button from '../ui/Button';

function Home() {
    const username = useSelector((state) => state.user.username);

    return (
        <div className="my-10 rounded-3xl bg-primary-dark p-8 text-center shadow-elegant sm:my-16">
            <h1 className="mb-12 font-display text-3xl font-bold text-gold drop-shadow-sm md:text-5xl">
                The best pizza.
                <br />
                <span className="text-xl font-light text-cream md:text-3xl">
                    Straight out of the oven, straight to you.
                </span>
            </h1>

            {username === '' ? (
                <CreateUser />
            ) : (
                <Button to="/menu" type="primary">
                    Continue ordering, {username}
                </Button>
            )}
        </div>
    );
}

export default Home;
