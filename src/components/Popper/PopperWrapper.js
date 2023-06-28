import classNames from 'classnames/bind';
import stlyes from './Popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(stlyes);

function PopperWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

PopperWrapper.propTypes = {
    // children: PropTypes.object,
    className: PropTypes.string,
};
export default PopperWrapper;
