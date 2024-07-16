import { useState } from 'react';
import InputFilter from '../components/atoms/InputFilter';
import FilterCategories from '../components/molecules/FilterCategories';
import Menu from '../components/organisms/Menu';
import data, { type Category, type Product } from '../constant/data';
import { useCart } from '../hooks/useCart';

const Dashboard = () => {
  const { categories } = data;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] =
    useState<Category[]>(categories);
  const { addToCart } = useCart();

  const handleSearch: (term: string) => void = (term: string): void => {
    setSearchTerm(term);
  };

  // Funcion para reemplazar los acentos
  function quitarAcentos(cadena: string): string {
    const acentos = 'áéíóúÁÉÍÓÚ';
    const sinAcentos = 'aeiouAEIOU';

    for (let i = 0; i < acentos.length; i++) {
      cadena = cadena.replace(
        new RegExp(acentos.charAt(i), 'g'),
        sinAcentos.charAt(i)
      );
    }

    return cadena;
  }

  const displayedCategories = filteredCategories.map((category) => ({
    ...category,
    products: category.products.filter((product) =>
      quitarAcentos(product.title.toLowerCase()).includes(
        quitarAcentos(searchTerm.toLowerCase())
      )
    ),
  }));

  return (
    <section className='flex bg-black flex-col justify-center items-center pt-20 '>
      <div className='flex flex-row justify-between items-center gap-8'>
        <InputFilter onSearch={handleSearch} />
        <FilterCategories onFilter={setFilteredCategories} />
      </div>
      <div className='bg-black w-full flex flex-col items-center justify-center'>
        {displayedCategories.map(
          (category: { products: Product[]; id: number; name: string }) => (
            <Menu
              key={category.id}
              products={category.products}
              addToCart={addToCart}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Dashboard;
