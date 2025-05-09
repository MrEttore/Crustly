import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
    const { quantity, name, totalPrice } = item;

    return (
        <li className="space-y-1 py-3 text-red-50">
            <div className="flex items-center justify-between gap-4">
                <p className="text-xl font-semibold">
                    <span className="text-lg font-semibold">
                        {quantity}&times;
                    </span>{' '}
                    {name}
                </p>
                <p className="rounded-md bg-[#842424]/40 px-1.5 py-0.5 font-bold">
                    {formatCurrency(totalPrice)}
                </p>
            </div>
            <p className="text-sm font-normal capitalize italic">
                {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
            </p>
        </li>
    );
}

export default OrderItem;
