import { Outlet, useNavigation } from 'react-router-dom';

import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

export default function AppLayout() {
    // Get global app loading state with navigation hook.
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-cream">
            {isLoading && <Loader />}
            <Header />
            <div className="overflow-auto bg-gradient-to-br from-cream via-cream to-primary-light/30">
                <main className="mx-auto max-w-3xl px-2 py-6 md:px-0">
                    <Outlet />
                </main>
            </div>
            <CartOverview />
        </div>
    );
}
