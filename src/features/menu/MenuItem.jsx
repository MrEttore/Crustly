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
        <li className="flex flex-col md:flex-row gap-6 py-6 items-center md:items-start">
            <img
                src={imageUrl}
                alt={name}
                className={`w-32 h-32 object-cover rounded-3xl shadow-elegant border-4 border-gold/40 ${soldOut ? 'opacity-60 grayscale' : ''}`}
            />
            <div className="flex grow flex-col gap-2 md:pt-2">
                <div className="w-fit rounded-xl bg-cream/80 px-4 py-2 shadow-elegant border border-gold/30">
                    <p className="text-2xl font-display font-bold text-primary-dark drop-shadow-sm">
                        {name}
                    </p>
                    <p className="font-light capitalize italic text-primary-dark/80 text-base">
                        {ingredients.join(', ')}
                    </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-4">
                    {!soldOut ? (
                        <p className="rounded-xl bg-gold/80 px-4 py-1 text-lg font-bold text-primary-dark shadow-elegant">
                            {formatCurrency(unitPrice)}
                        </p>
                    ) : (
                        <p className="text-lg uppercase text-stone-400 font-semibold">Sold out</p>
                    )}
                    <div className="flex gap-2 items-center">
                        {!soldOut && !isInCart && (
                            <Button type="small" onClick={handleAddToCart}>
                                Add
                            </Button>
                        )}
                        {isInCart && (
                            <div className="flex gap-2 items-center">
                                <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
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
