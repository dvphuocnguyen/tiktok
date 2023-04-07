import classNames from "classnames/bind";
import styles from "./Header.module.scss"
import images from "../../../../asset/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faSearch, faEllipsisVertical, faPlus, faLanguage, faCircle, faCircleQuestion, faKeyboard, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "../../../Popper";
import Button from "../../../Button";
import AccountItem from "../../../AccountItem";
import Menu from "../../../Popper/Menu";

const MENU_ITEMS = [{
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "Tiếng Việt",
},
{
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Phản hồi và trợ giúp",
    to: '/feedback'
},
{
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Phím tắt trên bàn phím",
},
{
    icon: <FontAwesomeIcon icon={faToggleOff} />,
    title: "Chế độ tối",
},
{
    icon: <FontAwesomeIcon icon={faToggleOn} />,
    title: "Chế độ sáng",
}];

console.log(MENU_ITEMS);

const cx = classNames.bind(styles);

function Header() {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0)
    }, [])

    return (<header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={cx(images.logo)} alt="tiktok"></img>
            <Tippy
                visible={searchResult.length > 0}
                interactive
                render={(attrs) => {
                    return (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )
                }}
            >
                <div className={cx('search')}>
                    <input placeholder="Seach video" spellCheck="true"></input>
                    <button className={cx('clear')}><FontAwesomeIcon icon={faCircleXmark} /></button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <Tippy content="tim kiem">
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Tippy >
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text >
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Tải lên</span>
                </Button>
                <Button primary >Đăng nhập</Button>
                <Menu items={MENU_ITEMS}>
                    <button className={cx('more-btn')} >
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
            </div>
        </div>
    </header >);
}

export default Header;