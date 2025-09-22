import { useRouteError } from 'react-router-dom';

import LinkButton from './LinkButton';

function Error() {
    const error = useRouteError();

    return (
        <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-2xl bg-cream p-8 shadow-elegant ring-1 ring-zinc-200">
            <h1 className="mb-4 font-display text-3xl font-semibold text-primary">
                Something went wrong!
            </h1>
            <p className="mb-6 text-lg text-zinc-600">
                {error.data || error.message}
            </p>
            <LinkButton to="-1">&larr; Go back</LinkButton>
        </div>
    );
}

export default Error;
