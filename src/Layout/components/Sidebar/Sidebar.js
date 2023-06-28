import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '../../../config';
import {
    HomeIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
    HomeActiveIcon,
    UserGroupIcon,
    LiveIcon,
} from '../../../components/Icon/Icons';
import SuggestAccount from '../../../components/SuggestAccount/SuggestAccount';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestAccount label="Suggested accounts" />
            <SuggestAccount label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
