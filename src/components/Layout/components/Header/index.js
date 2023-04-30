import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faPlus,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faToggleOff,
    faToggleOn,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
// import { useEffect, useState } from 'react';
// import { Wrapper as PopperWrapper } from '../../../Popper';
import Button from '../../../Button';
// import AccountItem from '../../../AccountItem';
import Menu from '../../../Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../Icon/Icons';
import Image from '../../../Image';
import Search from '../Search';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'ENG',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'VIE',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faToggleOff} />,
        title: 'Chế độ tối',
    },
    {
        icon: <FontAwesomeIcon icon={faToggleOn} />,
        title: 'Chế độ sáng',
    },
];

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem trang cá nhân',
            to: '/@nguyen',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/feedback',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/feedback',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={cx(images.logo)} alt="tiktok"></img>
                {/* search */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Tải lên" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    {' '}
                                    <UploadIcon />{' '}
                                </button>
                            </Tippy>
                            <Tippy content="Tin nhắn" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    {' '}
                                    <MessageIcon />{' '}
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Tải lên</span>
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/339811841_2277720402411015_7428454995355606963_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=EiuRmkqZUDMAX8miKlT&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfANw8p8o5cUwZKsN5E2XsC77wJ6uJV4p-EoylCXt2VSLw&oe=643C6C66"
                                className={cx('user-avatar')}
                                alt="nguyen"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
