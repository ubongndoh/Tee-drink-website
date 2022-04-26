import React, { useState, useContext, useEffect, createContext } from 'react';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
// Create context
const AppContext = createContext();

// Provider component
const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('a');
	const [cocktails, setCocktails] = useState([]);

	const getDrinks = async () => {
		setLoading(true);

		try {
			const res = await axios.get(`${url}${searchTerm}`);
			// checks if drinks array is not empty
			const { drinks } = res.data;
			if (drinks) {
				const newCocktails = drinks.map((drink) => {
					const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
						drink;

					// assign alias to properties from drinks array
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					};
				});

				setCocktails(newCocktails);
			} else {
				setCocktails([]);
			}

			setLoading(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	useEffect(() => {
		getDrinks();
		// eslint-disable-next-line
	}, [searchTerm]);
	return (
		<AppContext.Provider
			value={{
				cocktails,
				loading,
				searchTerm,
				setSearchTerm,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
