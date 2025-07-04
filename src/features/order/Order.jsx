import { useEffect } from 'react';

import { useFetcher, useLoaderData } from 'react-router-dom';

import { getOrder } from '../../services/apiRestaurant';
import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
} from '../../utils/helpers';
import OrderItem from '../order/OrderItem';
import UpdateOrder from './UpdateOrder';

function Order() {
    const order = useLoaderData();

    // Fetch data (GET) from another route without the user going there.
    const fetcher = useFetcher();

    useEffect(() => {
        if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    }, [fetcher]);

    const {
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
        cart,
    } = order;
    const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (
        <div className="mx-auto mt-8 max-w-2xl space-y-8 rounded-3xl bg-cream px-4 py-8 shadow-elegant">
            <div className="flex flex-wrap items-center justify-between gap-2 text-primary-dark">
                <h2 className="font-display text-2xl font-bold">
                    Order{' '}
                    <span className="rounded-md bg-gold/40 p-1 text-primary-dark">
                        #{id}
                    </span>{' '}
                    status
                </h2>

                <div className="space-x-2">
                    {priority && (
                        <span className="rounded-md bg-gold px-3 py-1 text-sm font-bold uppercase tracking-wide text-primary-dark">
                            Priority
                        </span>
                    )}
                    <span className="rounded-md bg-primary-dark px-3 py-1 text-sm font-bold uppercase tracking-wide text-cream">
                        {status}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-2 text-lg font-semibold text-primary-dark">
                <span>
                    Estimated delivery:{' '}
                    <span className="font-bold text-gold">
                        {formatDate(estimatedDelivery)}
                    </span>{' '}
                    ({deliveryIn} min)
                </span>
                <span>
                    Total:{' '}
                    <span className="font-bold text-gold">
                        {formatCurrency(orderPrice + (priorityPrice || 0))}
                    </span>
                </span>
            </div>

            <ul className="divide-y divide-gold/30">
                {cart.map((item) => (
                    <OrderItem
                        item={item}
                        key={item.pizzaId}
                        isLoadingIngredients={false}
                        ingredients={item.ingredients || []}
                    />
                ))}
            </ul>

            {!priority && <UpdateOrder order={order} />}
        </div>
    );
}

export async function loader({ params }) {
    const order = await getOrder(params.orderId);
    return order;
}

export default Order;
