import { forwardRef, useState } from 'react';
import images from '../../asset/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
// import { Wrapper } from '../Popper';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    };
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
});

export default Image;
