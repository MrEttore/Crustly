import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
    const base =
        'inline-block text-base rounded-xl font-medium tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-offset-0 disabled:cursor-not-allowed shadow-elegant';

    const styles = {
        primary: base + ' bg-primary text-cream hover:bg-zinc-900 px-6 py-3',
        small:
            base + ' bg-primary text-cream hover:bg-zinc-900 px-4 py-2 text-sm',
        secondary:
            'bg-cream text-primary border border-zinc-300 hover:bg-zinc-100 px-6 py-3 rounded-xl font-medium tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-800 disabled:cursor-not-allowed shadow-elegant',
        round:
            base +
            ' bg-zinc-900 text-cream hover:bg-zinc-800 px-3 py-1.5 text-sm rounded-full',
    };

    if (to)
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        );

    return (
        <button disabled={disabled} className={styles[type]} onClick={onClick}>
            {children}
        </button>
    );
}
