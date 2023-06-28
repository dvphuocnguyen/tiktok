import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import images from '../../asset/images';
import { PopperWrapper } from '../../components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive={true} delay={[0, 800]} placement="bottom" render={renderPreview} offset={[8, 2]}>
                <div className={cx('account-item')}>
                    <img className={cx('acc-avatar')} src={images.noImage} alt="preview-ava"></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>phnguyen</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Phuoc Nguyen</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
