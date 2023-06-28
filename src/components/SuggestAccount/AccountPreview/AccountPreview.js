import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import images from '../../../asset/images';
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src={images.noImage} alt="previewAva"></img>
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>phnguyen</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Phuoc Nguyen</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>88.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
