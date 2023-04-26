import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fmen-shirts&psig=AOvVaw1ZHJFUzRL5yq8QMR8W0wfL&ust=1681288635380000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjo8rC2of4CFQAAAAAdAAAAABAE" alt="Nguyen"></img>
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