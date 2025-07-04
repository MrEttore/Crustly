import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Button({ children, disabled, to, type, onClick }) {
    const base =
        'inline-block text-base rounded-2xl font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:cursor-not-allowed shadow-elegant';

    const styles = {
        primary:
            base +
            ' bg-primary text-cream hover:bg-primary-dark hover:text-gold px-6 py-3',
        small:
            base +
            ' bg-primary text-cream hover:bg-primary-dark hover:text-gold px-4 py-2 text-sm',
        secondary:
            'bg-cream text-primary border-2 border-primary hover:bg-gold hover:text-primary-dark px-6 py-3 rounded-2xl font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:cursor-not-allowed shadow-elegant',
        round:
            base +
            ' bg-gold text-primary-dark hover:bg-primary hover:text-gold px-3 py-1 text-sm',
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
