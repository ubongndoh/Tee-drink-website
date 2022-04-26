import React, { useEffect, useState } from 'react';
import Loading from '../components/cocktail/Loading';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [cocktail, setCocktail] = useState(null);

	useEffect(() => {
		setLoading(true);

		try {
			const fetchDrink = async () => {
				const { data } = await axios.get(`${url}${id}`);

				if (data.drinks) {
					const {
						strDrink,
						strDrinkThumb,
						strAlcoholic,
						strCategory,
						strGlass,
						strInstructions,
					} = data.drinks[0];

					const newCocktail = {
						strDrink,
						strDrinkThumb,
						strAlcoholic,
						strCategory,
						strGlass,
						strInstructions,
					};

					setCocktail(newCocktail);
				} else {
					setCocktail(null);
				}
				setLoading(false);
			};

			fetchDrink();
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	}, [id]);

	if (loading) return <Loading />;
	if (!cocktail) {
		return <h2>There is no cocktail available now</h2>;
	}
	const {
		strDrinkThumb,
		strAlcoholic,
		strCategory,
		strGlass,
		strInstructions,
	} = cocktail;

	return (
		<div className='w-60 mx-auto my-10 mb-10 bg-gray-100 rounded-md'>
			<Link to='/' className='p-3 text-base text-rose-400'>
				Go back
			</Link>
			<img
				src={strDrinkThumb}
				className='w-60'
				// style={{ objectFit: 'cover' }}
				alt={strDrinkThumb}
			/>
			<div className='p-4'>
				<p className='my-2'>
					<span className='text-xl'>Name: </span>
					{strAlcoholic}
				</p>
				<p className='my-2'>
					<span className='text-xl'>Category: </span>
					{strCategory}
				</p>
				<p className='my-2'>
					<span className='text-xl'>Type: </span>
					{strAlcoholic}
				</p>
				<p className='my-2'>
					<span className='text-xl'>Glass: </span>
					{strGlass}
				</p>
				<p className='my-2'>
					<span className='text-xl'>Instructions: </span>
					{strInstructions}
				</p>
			</div>
		</div>
	);
};

export default SingleCocktail;
