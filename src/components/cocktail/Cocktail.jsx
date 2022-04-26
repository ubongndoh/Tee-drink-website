import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ item: { id, name, image, info, glass } }) => {
	return (
		<div className='flex flex-col justify-center content-center mx-12 mt-10 mb-10 bg-gray-100 rounded-md'>
			<img src={image} className=' rounded-t-md' alt={name} />
			<div className=' p-10'>
				<h3 className='text-2xl font-extrabold text-violet-500 my-2'>{name}</h3>
				<h4 className='text-lg font-bold my-2'>{glass}</h4>
				<p className=' text-base font-normal text-rose-300 my-2'>{info}</p>
				<button>
					<Link to={`/cocktail/${id}`} className='flex'>
						<span className='text-lg'>Read More </span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4 mx-2 mt-2'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth='2'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M13 5l7 7-7 7M5 5l7 7-7 7'
							/>
						</svg>
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Cocktail;
