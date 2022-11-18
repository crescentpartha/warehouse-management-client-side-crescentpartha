import React from 'react';
import backImg from '../../../../images/book-banner.jpg';

const Banner = () => {
    const styles = {
        header: {
            backgroundImage: `url(${backImg})`,
            height: '60vh',
            width: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px 0',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }
    }
    return (
        <div style={styles.header} className='absolute w-full'>
            <div style={styles.content} className='text-white'>
                <h2 className='text-2xl sm:text-4xl text-amber-400 text-semibold font-sans uppercase'>Book Warehouse</h2>
                <p className='text-base sm:text-lg text-amber-300'>Reading is a conversation. All books talk, but a good book listens as well.</p>
            </div>
        </div>
    );
};

export default Banner;