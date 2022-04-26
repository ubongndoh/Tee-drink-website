import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav>
			<div className=' text-slate-50 text-2xl pt-4 pl-5'>
				<Link to='/'>TEE Drinks </Link>
			</div>
		</nav>
	);
}
