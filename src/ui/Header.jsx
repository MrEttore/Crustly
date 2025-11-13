import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
    return (
        <header className="flex items-center justify-between border-b border-zinc-200 bg-cream px-4 py-3 font-display text-lg font-semibold text-primary sm:px-8">
            <Link
                to="/"
                className="flex items-center font-display text-xl font-semibold tracking-tight text-primary transition-colors hover:text-zinc-700"
            >
                <img
                    src={logo}
                    alt="Crustly Logo"
                    className="ml-2 inline h-8 w-8"
                />
                rustly
            </Link>
            <SearchOrder />
            <Username />
        </header>
    );
}
