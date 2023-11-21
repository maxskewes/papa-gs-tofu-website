import VendorMenu from './VendorMenu';

const VendorProductPage = ({ productLink, productTitle }) => {
  return (
    <div className='fixed flex flex-col top-0 left-0 w-[100vw] h-[100vh] bg-white p-4 z-20'>
      <VendorMenu productLink={productLink} productTitle={productTitle} />
      <div className='flex justify-center w-full h-full'>
        <img
          className='object-contain'
          src={`/images/bags/bag-1000-${productLink}.png`}
          alt={`product image of ${productTitle} variety`}
        />
      </div>
    </div>
  );
};

export default VendorProductPage;
