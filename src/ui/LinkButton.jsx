import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function LinkButton({ children, to }) {
    const navigate = useNavigate();

    const className =
        'px-4 py-2 bg-gold text-primary-dark rounded-2xl text-base font-semibold shadow-elegant hover:bg-primary hover:text-gold transition-colors duration-200';

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
