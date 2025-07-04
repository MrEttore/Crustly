import { useRouteError } from 'react-router-dom';

import LinkButton from './LinkButton';

function Error() {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center min-h-[40vh] p-8 bg-cream rounded-3xl shadow-elegant">
            <h1 className="text-3xl font-display font-bold text-primary-dark mb-4">Something went wrong!</h1>
            <p className="mb-6 text-lg text-primary-dark/80">{error.data || error.message}</p>
            <LinkButton to="-1">&larr; Go back</LinkButton>
        </div>
    );
}

export default Error;
