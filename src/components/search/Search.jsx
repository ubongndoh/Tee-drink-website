import React, { useRef } from 'react';
import { useGlobalContext } from '../../context/Context';
const Search = () => {
	const { setSearchTerm } = useGlobalContext();

	const searchValue = useRef();
	const searchCocktail = () => {
		setSearchTerm(searchValue.current.value);
	};
	return (
		<>
			<div className=' mx-10 my-4 px-7 py-10 bg-warmGray-50 shadow-2xl'>
				<h4 className='text-center mt-2 text-trueGray-700 text-2xl capitalize'>
					Find your favourite drinks
					<form className='mt-5 mb-5  mx-auto'>
						<input
							type='text'
							className='mt-1 w-full  px-3 py-2 bg-white border border-slate-300 rounded-md lg:text-lg text-sm shadow-sm placeholder-slate-400'
							placeholder='Search your favourite drinks here...'
							ref={searchValue}
							onChange={searchCocktail}
						/>
					</form>
				</h4>
			</div>
		</>
	);
};

export default Search;
