const Price=({price}: {price: number}) => {
    return <p className="text-secundary text-base">{price.toFixed(2)} Bs.</p>;
}

export default Price;