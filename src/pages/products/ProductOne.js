import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'


export default function ProductOne() {
	document.title = setTitle();
	return (
		<section>
			<Header />
			<Navbar />
		</section>
	)

	function setTitle() {
		return "Product Info";
	}
}
