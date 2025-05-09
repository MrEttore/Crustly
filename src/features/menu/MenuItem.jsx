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
        <li className="text flex gap-4 py-2">
            <img
                src={imageUrl}
                alt={name}
                className={`min-h-48 rounded-3xl ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />
            <div className="flex grow flex-col pt-0.5">
                <div className="w-fit rounded-md bg-[#842424]/20 px-3 py-1 shadow-sm">
                    <p className="w-fit text-xl font-semibold text-red-50">
                        {name}
                    </p>
                    <p className="text w-fit font-light capitalize italic text-red-50">
                        {ingredients.join(', ')}
                    </p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className="rounded-md bg-[#842424]/50 px-3 py-1 text-sm font-semibold text-red-50">
                            {formatCurrency(unitPrice)}
                        </p>
                    ) : (
                        <p className="text-sm uppercase text-red-50">
                            Sold out
                        </p>
                    )}

                    {isInCart && (
                        <div className="flex items-center gap-3 sm:gap-8">
                            <UpdateItemQuantity
                                pizzaId={id}
                                currentQuantity={currentQuantity}
                            />
                            <DeleteItem pizzaId={id} />
                        </div>
                    )}

                    {!soldOut && !isInCart && (
                        <Button type="small" onClick={handleAddToCart}>
                            Add to cart
                        </Button>
                    )}
                </div>
            </div>
        </li>
    );
}

export default MenuItem;
