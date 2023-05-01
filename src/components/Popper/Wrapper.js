import classNames from 'classnames/bind';
import stlyes from './Popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(stlyes);

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.array,
    className: PropTypes.string,
};
export default Wrapper;
