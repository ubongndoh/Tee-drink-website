import React from 'react';
import Navbar from '../components/navbar/Navbar';
import img from '../assets/ash-edmonds-fsI-_MRsic0-unsplash.jpg';
import Search from '../components/search/Search';
import CocktailList from '../components/cocktail/CocktailList';
export default function Home() {
	return (
		<div>
			<div
				className=' lg:h-screen  h-96'
				style={{
					backgroundImage: `url(${img})`,
					backgroundRepeat: 'no-repeat',
					//height: '100vh',
					backgroundSize: 'cover',
					width: '100%',
					backgroundPosition: 'center',
				}}
			>
				<Navbar />

				<div className=' lg:text-4xl text-2xl text-slate-100  uppercase lg:pt-40 pt-20 pl-20'>
					<div className='py-3'>feel the taste</div>
					<div className=' pl-20'> of the drink...</div>
					<div className=' pl-28 pt-14 cursor-pointer mb-10'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-14 w-14 border-solid border-2 border-slate-100 rounded-full p-2'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth='2'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
							/>
						</svg>
					</div>
				</div>
			</div>
			<Search />
			<CocktailList />
		</div>
	);
}
