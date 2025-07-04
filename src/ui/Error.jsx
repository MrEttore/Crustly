import { useRouteError } from 'react-router-dom';

import LinkButton from './LinkButton';

function Error() {
    const error = useRouteError();

    return (
        <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-3xl bg-cream p-8 shadow-elegant">
            <h1 className="mb-4 font-display text-3xl font-bold text-primary-dark">
                Something went wrong!
            </h1>
            <p className="mb-6 text-lg text-primary-dark/80">
                {error.data || error.message}
            </p>
            <LinkButton to="-1">&larr; Go back</LinkButton>
        </div>
    );
}

export default Error;
