import type {Product} from "../../constant/data";
import ProductDetail from "../molecules/CardProduct";


const Menu=({products,addToCart}: {products: Product[],addToCart: (product: Product) => void}) => {
    return (
        <>
            {products.map((product: Product) => (
                <div
                    className='my-8' key={product.id}
                >
                    <ProductDetail
                        product={product}
                        onAddToCart={(): void => addToCart(product)}
                    />
                </div>
            ))}
        </>
    );
};

export default Menu;

