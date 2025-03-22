import { Link } from 'react-router-dom';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="bg-yellow-500 border-stone-200 border-b-2 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Crustly Co.
      </Link>
      <Username />
    </header>
  );
}
