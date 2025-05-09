import { Link } from 'react-router-dom';

import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
    return (
        <header className="flex items-center justify-between border-b-2 border-red-50 bg-[#842424] px-4 py-3 text-xl font-medium uppercase text-red-50 sm:px-6">
            <Link to="/" className="tracking-widest">
                Crustly & Co.
            </Link>
            <SearchOrder />
            <Username />
        </header>
    );
}
