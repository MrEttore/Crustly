import { useSelector } from 'react-redux';

export default function Username() {
    const username = useSelector((state) => state.user.username);

    if (!username) return null;

    return (
        <div className="hidden font-display text-base font-bold text-gold md:block">
            {username}
        </div>
    );
}
