import { useDispatch, useSelector } from 'react-redux';

import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';

function MenuItem({ pizza }) {
    const dispacth = useDispatch();

    const { name, unitPrice, ingredients, soldOut, imageUrl, id } = pizza;
    const currentQuantity = useSelector(getCurrentQuantityById(id));
    const isInCart = currentQuantity > 0;

    function handleAddToCart() {
        const newItem = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1,
        };

        dispacth(addItem(newItem));
    }

    return (
        <li className="flex flex-col items-center gap-6 py-6 md:flex-row md:items-start">
            <img
                src={imageUrl}
                alt={name}
                className={`h-32 w-32 rounded-2xl object-cover shadow-elegant ring-1 ring-zinc-200 ${soldOut ? 'opacity-60 grayscale' : ''}`}
            />
            <div className="flex grow flex-col gap-2 md:pt-2">
                <div className="w-fit rounded-lg bg-cream px-4 py-2 shadow-elegant ring-1 ring-zinc-200">
                    <p className="font-display text-xl font-semibold text-primary">
                        {name}
                    </p>
                    <p className="text-sm font-normal capitalize text-zinc-600">
                        {ingredients.join(', ')}
                    </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-4">
                    {!soldOut ? (
                        <p className="rounded-lg bg-zinc-100 px-3 py-1 text-base font-medium text-primary shadow-elegant">
                            {formatCurrency(unitPrice)}
                        </p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-zinc-400">
                            Sold out
                        </p>
                    )}
                    <div className="flex items-center gap-2">
                        {!soldOut && !isInCart && (
                            <Button type="small" onClick={handleAddToCart}>
                                Add
                            </Button>
                        )}
                        {isInCart && (
                            <div className="flex items-center gap-2">
                                <UpdateItemQuantity
                                    pizzaId={id}
                                    currentQuantity={currentQuantity}
                                />
                                <DeleteItem pizzaId={id} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default MenuItem;
