import classNames from "classnames/bind";
import styles from "./Header.module.scss"
import images from "../../../../asset/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faSearch, faCircle } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);

function Header() {
    return (<header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={cx(images.logo)} alt="tiktok"></img>
            </div>
            <div className={cx('search')}>
                <input placeholder="Seach video" spellCheck="true"></input>
                <button className={cx('clear')}><FontAwesomeIcon icon={faCircleXmark} /></button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                {/*loading */}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch} />

                </button>
            </div>
            <div className={cx('action')}></div>
        </div>
    </header >);
}

export default Header;