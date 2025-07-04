import { Link } from 'react-router-dom';

import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
    return (
        <header className="flex items-center justify-between border-b border-gold bg-primary-dark px-4 py-3 font-display text-xl font-bold uppercase text-cream shadow-elegant sm:px-8">
            <Link
                to="/"
                className="font-display text-2xl font-bold tracking-widest text-gold transition-colors duration-200 hover:text-gold/80"
            >
                Crustly & Co.
            </Link>
            <SearchOrder />
            <Username />
        </header>
    );
}
