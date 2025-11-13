import { useLoaderData } from 'react-router-dom';

import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
    // 3a. Get data from loader with custom hook.
    const menu = useLoaderData();

    console.log(menu);

    return (
        <ul className="divide-y divide-zinc-200 px-2 md:px-0">
            {menu.map((pizza) => (
                <MenuItem pizza={pizza} key={pizza.id} />
            ))}
        </ul>
    );
}

// 1a. Create loader function.
export async function loader() {
    const menu = await getMenu();

    return menu;
}

export default Menu;
