import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
    const { quantity, name, totalPrice } = item;

    return (
        <li className="space-y-1 py-4 text-primary">
            <div className="flex items-center justify-between gap-4">
                <p className="font-display text-xl font-semibold">
                    <span className="text-lg font-semibold text-primary">
                        {quantity}&times;
                    </span>{' '}
                    {name}
                </p>
                <p className="rounded-lg bg-zinc-100 px-3 py-1 font-medium text-primary shadow-elegant">
                    {formatCurrency(totalPrice)}
                </p>
            </div>
            <p className="text-base font-normal capitalize text-zinc-600">
                {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
            </p>
        </li>
    );
}

export default OrderItem;
