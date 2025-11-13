import { useSelector } from 'react-redux';

import CreateUser from '../features/user/CreateUser';
import Button from '../ui/Button';

function Home() {
    const username = useSelector((state) => state.user.username);

    return (
        <div className="my-10 rounded-3xl bg-cream p-10 text-center sm:my-16">
            <h1 className="mb-8 font-display text-4xl font-semibold text-primary md:text-5xl">
                Pizza simplified.
                <br />
                <span className="text-xl font-normal text-zinc-600 md:text-2xl">
                    From oven to doorstep. Hot, Fast, Simple
                </span>
            </h1>

            {username === '' ? (
                <CreateUser />
            ) : (
                <Button to="/menu" type="primary">
                    Back to the menu, {username}
                </Button>
            )}
        </div>
    );
}

export default Home;
