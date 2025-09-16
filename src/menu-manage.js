const menu = (content) => {
    const menus = document.createElement('div');
    menus.classList.add('menus');

    const appetizers_texts = [
        {
            name: 'Ships & Salsa',
            price: '$6.00'
        },
        {
            name: 'Fried Pickles',
            price: '$7.50'
        },
        {
            name: 'Cheese Sticks',
            price: '$8.00'
        },
        {
            name: 'Southwest Chicken Egg Rolls',
            price: '$9.50'
        }
    ];
    const appetizers = createMenuElements('appetizers', 'Appetizers', appetizers_texts);
    menus.appendChild(appetizers);
    const entrees_texts = [
        {
            name: 'Fish Platter',
            price: '$13.50'
        },
        {
            name: 'Combo Platter',
            price: '$13.50'
        },
        {
            name: 'Seafood Tacos',
            price: '$12.50'
        },
        {
            name: 'Beef Fajita Tacos',
            price: '$12.00'
        }
    ];
    const entrees = createMenuElements('entrees', 'Entrees', entrees_texts);
    menus.appendChild(entrees);
    const burgers_texts = [
        {
            name: 'Classic Cheeseburger',
            price: '$11.50'
        },
        {
            name: 'Spicy Chicken Sandwich',
            price: '$11.00'
        },
    ];
    const burgers_sandwiches = createMenuElements('burgers', 'Burgers', burgers_texts);
    menus.appendChild(burgers_sandwiches);
    const sides_texts = [
        {
            name: 'French Fries',
            price: '$3.50'
        },
        {
            name: 'Waffle Fries',
            price: '$3.75'
        },
        {
            name: 'Seasonal Vegetables',
            price: '$3.50'
        },
        {
            name: ' Small Caesar Salad',
            price: '$5.50'
        },
    ];
    const sides = createMenuElements('sides', 'Sides', sides_texts);
    menus.appendChild(sides);

    content.appendChild(menus);
}

function createMenuElements(identifier, header, content){
    const element = document.createElement('div');
    element.id = identifier;
    const head = document.createElement('h3');
    head.innerHTML = header;
    element.appendChild(head);
    const list = document.createElement('ul');
    content.forEach(element => {
        const item = document.createElement('li');
        item.innerHTML = `${element.name} ---- ${element.price}`;
        list.appendChild(item);
    });
    element.appendChild(list);
    return element;
}

export {menu};