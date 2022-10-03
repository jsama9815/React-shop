import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
<<<<<<< HEAD
	const products =useGetProducts(API);
=======
	const [products, setProducts] = useState ([]);
	useEffect(async() => {
		const response = await axios(API);
		setProducts(response.data);
	}, []); 
>>>>>>> cca592ea0f59699bcb950dc828a9a1a0199d9175
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				)) }
				
			</div>
		</section>
	);
}

export default ProductList;
