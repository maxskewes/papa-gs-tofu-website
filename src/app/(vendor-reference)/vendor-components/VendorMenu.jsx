import { roboto } from '../../fonts';
import PGlink from '../../components/PGlink';

const VendorLink = ({ children, to }) => {
  return (
    <PGlink to={to}>
      <p className='text-md text-TAWNY_DARK hover:text-TAWNY'>{children}</p>
    </PGlink>
  );
};

const VendorLinkMenu = ({ productLink, productTitle }) => {
  return (
    <div className='my-2 flex flex-col justify-start text-center'>
      <VendorLink to={`/product-image/${productLink}`}>{productTitle} Product Image</VendorLink>
      <VendorLink to={`/nutrition-facts/${productLink}`}>{productTitle} Nutrition Facts</VendorLink>
      <VendorLink to={`/${productLink}`}>{productTitle} Product Page</VendorLink>
      <VendorLink to={'/'}>
        Papa G&apos;s Website/ <br />
        &nbsp; Home Page
      </VendorLink>
    </div>
  );
};

const VendorImageMenu = () => {
  return (
    <div className='my-2 pr-8 flex flex-col justify-end text-center '>
      <p>All Product Images:</p>
      <VendorLink to={'/product-image/original-recipe'}>Original Recipe</VendorLink>
      <VendorLink to={'/product-image/savory-sesame'}>Savory Sesame</VendorLink>
      <VendorLink to={'/product-image/street-taco'}>Street Taco</VendorLink>
      <VendorLink to={'/product-image/barbeque'}>Barbeque</VendorLink>
    </div>
  );
};

const VendorMenu = ({ productLink, productTitle }) => {
  return (
    <div className={roboto.className}>
    <div className='w-full fixed flex flex-row justify-between'>
      <VendorLinkMenu productLink={productLink} productTitle={productTitle} />
      <VendorImageMenu />
    </div>
    </div>
  );
};

export default VendorMenu;
