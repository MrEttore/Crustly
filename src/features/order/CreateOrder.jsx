import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';

import { createOrder } from '../../services/apiRestaurant';
import store from '../../store';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import EmptyCart from '../cart/EmptyCart';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import { fetchAddress } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str,
    );

function CreateOrder() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const cart = useSelector(getCart);
    const totalCartPrice = useSelector(getTotalCartPrice);
    const {
        username,
        status: addressStatus,
        position,
        address,
        error: errorAddress,
    } = useSelector((state) => state.user);
    const isSubmitting = navigation.state === 'submitting';
    const [withPriority, setWithPriority] = useState(false);
    const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
    const totalPrice = totalCartPrice + priorityPrice;
    const isLoadingAddress = addressStatus === 'loading';

    // 3b. Get data from action with custom hook.
    const formsErrors = useActionData();

    if (!cart.length) return <EmptyCart />;

    return (
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl bg-cream px-4 py-8 shadow-elegant">
            <h2 className="mb-8 font-display text-2xl font-bold text-primary-dark">
                Ready to order?
            </h2>

            <Form method="POST" action="/order/new" className="space-y-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <label className="text-base font-semibold text-primary-dark sm:basis-40">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="customer"
                        required
                        className="input flex flex-1"
                        defaultValue={username}
                    />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <label className="text-base font-semibold text-primary-dark sm:basis-40">
                        Phone number
                    </label>
                    <div className="grow">
                        <input
                            type="tel"
                            name="phone"
                            required
                            className="input w-full"
                        />
                    </div>
                    {formsErrors?.phone && (
                        <p className="mt-2 rounded-md bg-orange-300/80 p-2 text-xs text-orange-800">
                            {formsErrors.phone}
                        </p>
                    )}
                </div>

                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
                    <label className="text-base font-semibold text-primary-dark sm:basis-40">
                        Address
                    </label>
                    <div className="grow">
                        <input
                            type="text"
                            name="address"
                            disabled={isLoadingAddress}
                            required
                            className="input w-full"
                            defaultValue={address}
                        />
                        {addressStatus === 'error' && (
                            <p className="mt-2 rounded-md bg-orange-300/80 p-2 text-xs text-orange-800">
                                {errorAddress}
                            </p>
                        )}
                    </div>

                    {!position.latitude && !position.longitude && (
                        <span className="absolute right-1 top-[5px] z-50 md:right-[5px] md:top-[5px]">
                            <Button
                                type="small"
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(fetchAddress());
                                }}
                                disabled={isLoadingAddress}
                            >
                                Get position
                            </Button>
                        </span>
                    )}
                </div>

                <div className="mb-12 flex items-center gap-5">
                    <input
                        type="checkbox"
                        name="priority"
                        id="priority"
                        value={withPriority}
                        onChange={(e) => setWithPriority(e.target.checked)}
                        className="h-6 w-6 accent-[#842424]/60 focus:outline-none focus:ring focus:ring-[#842424] focus:ring-offset-2"
                    />
                    <label htmlFor="priority" className="font-extrabold">
                        Want to yo give your order priority?
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <input
                        type="hidden"
                        name="position"
                        value={
                            position.longitude && position.latitude
                                ? `${position.latitude}, ${position.longitude}`
                                : ''
                        }
                    ></input>
                    <Button
                        disabled={isSubmitting || isLoadingAddress}
                        type="primary"
                    >
                        {isSubmitting
                            ? 'Placing order...'
                            : ` Order now for ${formatCurrency(totalPrice)}`}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

// 1b. Create action function.
export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === 'true',
    };

    const errors = {};
    if (!isValidPhone(order.phone))
        errors.phone = 'Please enter a valid phone number.';

    if (Object.keys(errors).length > 0) return errors;

    const newOrder = await createOrder(order);

    store.dispatch(clearCart());

    return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
