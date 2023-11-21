import VendorMenu from './VendorMenu';

const VendorNutritionPage = ({ productLink, productTitle }) => {
  return (
    <div className='fixed flex top-0 left-0 w-[100vw] h-[100vh] bg-white z-20'>
      <div className='p-4'>
        <VendorMenu productLink={productLink} productTitle={productTitle} />
      </div>

      <div className='flex justify-center w-full h-full p-[1%]'>
        <img
          className='object-contain'
          src={`/images/nutrition-facts/nutrition-${productLink}.png`}
          alt={`${productTitle} variety nutritional information`}
        />
      </div>
    </div>
  );
};

export default VendorNutritionPage;
