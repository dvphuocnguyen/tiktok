import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import 'tippy.js/dist/tippy.css'; // optional
// import { Wrapper as PopperWrapper } from "../index";
// import Tippy from '@tippyjs/react/headless';
// import MenuItem from "./MenuItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    return (
        <header className={cx('header')} onClick={onBack}>
            <button className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
