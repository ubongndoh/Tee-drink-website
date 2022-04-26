/* src/App.jsx */
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';

function App() {
	return (
		<div className=''>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cocktail/:id' element={<SingleCocktail />} />
			</Routes>
		</div>
	);
}

export default App;
