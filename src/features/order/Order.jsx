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
        <div className="space-y-8 px-4 py-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-red-50">
                <h2 className="text-xl font-semibold">
                    Order{' '}
                    <span className="rounded-md bg-[#842424]/40 p-1">
                        #{id}
                    </span>{' '}
                    status
                </h2>

                <div className="space-x-2">
                    {priority && (
                        <span className="rounded-md bg-[#842424] px-3 py-1 text-sm uppercase tracking-wide text-red-50">
                            Priority
                        </span>
                    )}
                    <span className="rounded-md bg-green-700 px-3 py-1 text-sm uppercase tracking-wide text-green-50">
                        {status} order
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 rounded-md bg-[#842424]/20 px-6 py-5 text-red-50">
                <p className="font-medium">
                    {deliveryIn >= 0
                        ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
                        : 'Order should have arrived'}
                </p>
                <p className="text-xs">
                    (Estimated delivery: {formatDate(estimatedDelivery)})
                </p>
            </div>

            <ul className="divide-y divide-red-50 border-b border-t">
                {cart.map((item) => (
                    <OrderItem
                        item={item}
                        ingredients={
                            fetcher.data?.find((el) => el.id === item.pizzaId)
                                .ingredients ?? []
                        }
                        isLoadingIngredients={fetcher.state === 'loading'}
                        key={item.pizzaId}
                    />
                ))}
            </ul>

            <div className="space-y-2 rounded-md bg-[#842424]/40 px-6 py-5 text-red-50">
                <p className="text-sm font-medium">
                    Price pizza: {formatCurrency(orderPrice)}
                </p>
                {priority && (
                    <p className="text-sm font-medium">
                        Price priority: {formatCurrency(priorityPrice)}
                    </p>
                )}
                <p className="text-lg font-bold">
                    To pay on delivery:{' '}
                    {formatCurrency(orderPrice + priorityPrice)}
                </p>
            </div>
            {!priority && <UpdateOrder order={order} />}
        </div>
    );
}

export async function loader({ params }) {
    const order = await getOrder(params.orderId);
    return order;
}

export default Order;
