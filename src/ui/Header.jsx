import { Link } from 'react-router-dom';

import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
    return (
        <header className="flex items-center justify-between border-b border-gold bg-primary-dark px-4 py-3 text-xl font-display font-bold uppercase text-cream shadow-elegant sm:px-8">
            <Link to="/" className="tracking-widest text-2xl font-display font-bold text-gold hover:text-gold/80 transition-colors duration-200">
                Crustly & Co.
            </Link>
            <SearchOrder />
            <Username />
        </header>
    );
}
