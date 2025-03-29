import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';

function MenuItem({ pizza }) {
    const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    return (
        <li className="text flex gap-4 py-2">
            <img
                src={imageUrl}
                alt={name}
                className={`min-h-48 ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />
            <div className="flex grow flex-col pt-0.5">
                <p className="text-xl font-extrabold">{name}</p>
                <p className="text capitalize italic text-stone-500">
                    {ingredients.join(', ')}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className="text-sm">{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm uppercase text-stone-700">
                            Sold out
                        </p>
                    )}
                    <Button type="small">Add to cart</Button>
                </div>
            </div>
        </li>
    );
}

export default MenuItem;
