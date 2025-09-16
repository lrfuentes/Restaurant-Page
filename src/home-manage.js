const home = (content) => {
    const headline_texts = ['EAT', 'DRINK', 'VISIT'];
    const headline = document.createElement('div');
    headline.id = 'headline';
    headline_texts.forEach(value => {
        const val = document.createElement('h3');
        val.textContent = value;
        headline.appendChild(val);
    });
    content.appendChild(headline);

    const description = document.createElement('div');
    description.id = 'description';
    const text = document.createElement('p');
    text.textContent = `American food is best described as a diverse, evolving melting pot of culinary 
                        traditions that blends influences from Native American, European, African, and 
                        Asian cultures to create unique dishes. While characterized by hearty comfort foods 
                        like hamburgers, fried chicken, and apple pie, it is also highly regional, featuring 
                        dishes like Southern barbecue, Louisiana gumbo, and New York-style pizza.`;
    description.appendChild(text);
    content.appendChild(description);
}

export {home};