import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ba06827ebd4aa1cf1829589331694675~c5_100x100.jpeg?x-expires=1680696000&x-signature=zbkvwJGREWgtEOyQse%2BfLhW3b6A%3D" alt="Nguyen"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Dang Van Phuoc Nguyen</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx("userName")}>phnguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;