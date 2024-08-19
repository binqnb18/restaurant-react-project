import React, { useEffect, useState } from 'react';

const Catagory = () => {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
                const data = await response.json();
                setCategories(data.categories);
                setFilteredCategories(data.categories);
            } catch (error) {
                console.error('Error fetching the categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleFilter = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredCategories(categories);
        } else {
            const filtered = categories.filter(cat => cat.strCategory.toLowerCase() === category.toLowerCase());
            setFilteredCategories(filtered);
        }
    };

    return (
        <div className="bg-gray-100 p-10">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Our Menu</h1>
                <p className="text-gray-600">Explore our delicious selection of recipes.</p>
                <div className="flex justify-center mt-4 space-x-4">
                <button 
    onClick={() => handleFilter('All')} 
    className={`px-10 py-2 rounded-full border ${activeCategory === 'All' ? 'bg-red-700 text-white border-red-700' : 'bg-white text-gray-800 border-gray-800'}`}
>
    All
</button>
<button 
    onClick={() => handleFilter('Beef')} 
    className={`px-10 py-2 rounded-full border ${activeCategory === 'Beef' ? 'bg-red-700 text-white border-red-700' : 'bg-white text-gray-800 border-gray-800'}`}
>
    Beef
</button>
<button 
    onClick={() => handleFilter('Chicken')} 
    className={`px-10 py-2 rounded-full border ${activeCategory === 'Chicken' ? 'bg-red-700 text-white border-red-700' : 'bg-white text-gray-800 border-gray-800'}`}
>
    Chicken
</button>
<button 
    onClick={() => handleFilter('Dessert')} 
    className={`px-10 py-2 rounded-full border ${activeCategory === 'Dessert' ? 'bg-red-700 text-white border-red-700' : 'bg-white text-gray-800 border-gray-800'}`}
>
    Dessert
</button>
<button 
    onClick={() => handleFilter('Breakfast')} 
    className={`px-10 py-2 rounded-full border ${activeCategory === 'Breakfast' ? 'bg-red-700 text-white border-red-700' : 'bg-white text-gray-800 border-gray-800'}`}
>
    Breakfast
</button>

                </div>
            </div>

            <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {filteredCategories.map((category, index) => (
            <div 
                key={index} 
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110"
                style={{ width: '306px', height: '428px' }} 
            >
                <img
                    className="w-full h-48 object-cover"
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                />
                <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-red-700 mb-2">
                        ${ (Math.random() * (20 - 5) + 5).toFixed(2) }
                    </h3>
                    <h2 className="text-lg font-semibold">{category.strCategory}</h2>
                    <p className="text-gray-600">
                        Delicious {category.strCategory} recipes.
                    </p>
                </div>
            </div>
        ))}
    </div>
</div>

        </div>
    );
};

export default Catagory;
