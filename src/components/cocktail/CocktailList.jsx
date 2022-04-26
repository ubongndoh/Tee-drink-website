import React from 'react';
import { useGlobalContext } from '../../context/Context';
import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = () => {
	const { cocktails, loading } = useGlobalContext();
	if (loading) return <Loading />;
	if (cocktails.length < 1) {
		return (
			<h2 className='text-center m-4'>
				There is no cocktails for this search criteria
			</h2>
		);
	}

	return (
		<div className='grid lg:grid-cols-3 grid-col-1   '>
			{cocktails.map((cocktail) => (
				<Cocktail key={cocktail.id} item={cocktail} />
			))}
		</div>
	);
};

export default CocktailList;
