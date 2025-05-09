import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function LinkButton({ children, to }) {
    const navigate = useNavigate();

    const className =
        'px-3 py-1 bg-red-50 rounded-full text-sm text-[#842424]/80 hover:text-[#842424]';

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
