import data, { ExtraInfo } from '../../constant/data'; // Ajusta la ruta según la ubicación real de tu archivo data.ts

const ItemsMenu = () => {
  return (
    <div>
      <ul className='flex flex-row items-center justify-center gap-4'>
        {data?.extraInfo.map((item: ExtraInfo, index: number) => (
          <li className='flex flex-row items-center text-tertiary gap-2' key={index}>
            <a href={item.link} target='_blank' rel='noopener noreferrer'>
              {item.name}
            </a>
            {item.icon && <item.icon className='w-6 h-6' />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsMenu;
