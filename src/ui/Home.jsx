import { useSelector } from 'react-redux';

import CreateUser from '../features/user/CreateUser';
import Button from '../ui/Button';

function Home() {
    const username = useSelector((state) => state.user.username);

    return (
        <div className="my-10 rounded-2xl bg-[#842424]/80 p-5 text-center shadow-xl sm:my-16">
            <h1 className="mb-16 text-xl font-normal text-red-50 md:text-4xl">
                The best pizza.
                <br />
                <span className="text-xl font-light text-red-50 md:text-3xl">
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
