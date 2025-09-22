/* eslint-disable react-refresh/only-export-components */
import { useFetcher } from 'react-router-dom';

import { updateOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';

export default function UpdateOrder({ order }) {
    const fetcher = useFetcher();

    return (
        // Send data (POST) without navigating away to another route (like with <Form/>).
        <fetcher.Form method="PATCH" className="mt-4 text-right">
            <Button type="primary">Make priority</Button>
        </fetcher.Form>
    );
}

export async function action({ request, params }) {
    const data = { priority: true };
    await updateOrder(params.orderId, data);

    return null;
}
