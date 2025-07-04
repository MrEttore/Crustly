import { useFetcher } from 'react-router-dom';

import { updateOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';

export default function UpdateOrder({ order }) {
    const fethcer = useFetcher();

    return (
        // Send data (POST) without navigating away to another route (like with <Form/>).
        <fethcer.Form method="PATCH" className="text-right mt-4">
            <Button type="primary">Make priority</Button>
        </fethcer.Form>
    );
}

export async function action({ request, params }) {
    const data = { priority: true };
    await updateOrder(params.orderId, data);

    return null;
}
