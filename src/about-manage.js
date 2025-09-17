const about = (content) => {
    const abouts = document.createElement('div');
    abouts.id = 'abouts';
    const description = document.createElement('div');
    description.innerHTML = ` American food is a diverse "melting pot" cuisine characterized 
                            by its fusion of Native American, European, African, Asian, and 
                            Latin American influences, resulting in iconic dishes like burgers, 
                            hot dogs, and apple pie, as well as distinct regional specialties 
                            such as Tex-Mex, Southern comfort food, and New England clam chowder. 
                            It is known for its hearty comfort foods, abundant use of meat, larger 
                            portion sizes, and openness to new ingredients and culinary ideas from 
                            around the world.`;
    abouts.appendChild(description);
    const characteristics = document.createElement('div');
    const characteristics_head = document.createElement('h3');
    characteristics_head.innerHTML = 'Key Characteristics of American Food';
    characteristics.appendChild(characteristics_head);
    const characteristics_body = [
        {
            name: 'Culinary Fusion',
            description: 'American cuisine reflects its history of immigration and cultural exchange, blending ingredients and techniques from various global traditions into unique dishes.'
        },
        {
            name: 'Comfort Food',
            description: 'Many popular American dishes are known for being hearty and comforting, including macaroni and cheese, fried chicken, and meatloaf.'
        },
        {
            name: 'Regional Diversity',
            description: 'Different parts of the country boast distinct culinary traditions, such as Tex-Mex in the Southwest, gumbo in the South, and lobster rolls in New England.'
        },
        {
            name: 'Iconic Dishes',
            description: 'Certain foods, such as the hamburger, hot dog, apple pie, and chocolate chip cookie, are considered uniquely American.'
        },
        {
            name: 'Emphasis on Meat',
            description: 'There is a strong tradition of eating large portions of meat, particularly beef, with American steakhouses being a notable example.'
        },
    ];
    const unordered_list = document.createElement('ul');
    characteristics_body.forEach(element => {
        const list_item = document.createElement('li');
        list_item.innerHTML = `<b>${element.name}:</b> ${element.description}`;
        unordered_list.appendChild(list_item);
    });
    characteristics.appendChild(unordered_list);
    abouts.appendChild(characteristics);
    content.appendChild(abouts);
};

export {about}