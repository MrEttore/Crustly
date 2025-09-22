import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function LinkButton({
    children,
    to,
    className: extraClass = '',
}) {
    const navigate = useNavigate();

    const baseClass =
        'px-4 py-2 bg-cream text-primary border border-zinc-300 rounded-xl text-base font-medium shadow-elegant hover:bg-zinc-100 transition-colors duration-200';
    const className = `${baseClass} ${extraClass}`.trim();

    if (to === '-1')
        return (
            <button className={className} onClick={() => navigate(-1)}>
                {children}
            </button>
        );

    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
}
