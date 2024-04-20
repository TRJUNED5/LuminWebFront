// import ProductRangeSlider from './ProductRangeSlider';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from "./styles.module.css";

const OurProductDetails = () => {
  const navItems = [
      { title: 'Discover More', path: '/products' },
    ];
  return (
    // <div >
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 items-center justify-center max-w-7xl m-auto">
    //       <div data-aos='zoom-in-left' className="">
    //               <ProductRangeSlider />
    //           </div>
    //           <div data-aos="zoom-in" className="">
    //               <h1 style={{ color: '#39A78E', fontFamily: 'Outfit, sans-serif', fontSize: '28px', marginRight: "30px" }} className='text-3xl md:text-5xl text-center font-extrabold'>Our Product Details</h1>
    //   <div className='' style={{display:'flex',justifyContent:'center', marginRight: "30px" }}>
    //   {navItems.map((item) => (
    //   <Button
    //     key={item.title}
    //     color="inherit"
    //     component={Link}
    //     to={item.path}
    //     size='small'
    //     style={{
    //       backgroundImage: 'linear-gradient(to right, #4CAF50, #2196F3)',
    //       color: 'black',
    //       //border: '1px solid black',
    //       padding: '7px',
    //       borderRadius: '10px',
    //       marginTop: '50px'
    //     }}        >
    //     {item.title}
    //   </Button>
    // ))}
    //   </div>
    //           </div>

    //       </div>
    //   </div>
    <div className={styles.container}>
      <div className={styles.title}>Our Products</div>
      <div className={styles.imagesRow}>
        <div className={styles.imageContainer}>
          <img
            className={styles.BoxImg}
            style={{height: '200px', width: '200px'}}
            src="https://images.unsplash.com/photo-1654111539308-1f86feff6ca3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
            alt="Product"
          />
          <div className={styles.caption}>Sewing Thread</div>
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.BoxImg}
            style={{height: '200px', width: '200px'}}
            src="https://images.pexels.com/photos/2070676/pexels-photo-2070676.jpeg"
            alt="Product"
          />
          <div className={styles.caption}>Spandex Yarn</div>
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.BoxImg}
            style={{height: '200px', width: '200px'}}
            src="https://images.pexels.com/photos/5788376/pexels-photo-5788376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Product"
          />
          <div className={styles.caption}>Sweater Yarn</div>
        </div>
      </div>
      {navItems.map((item) => (
          <Button
            className={styles.discoverButton}
            key={item.title}
            component={Link}
            to={item.path}
          >
            {item.title}
          </Button>
        ))}
    </div>
  );
};

export default OurProductDetails;
