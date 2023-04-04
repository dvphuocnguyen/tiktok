import classNames from "classnames/bind";
import styles from "./Header.module.scss"
import images from "../../../../asset/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faSearch, faSignIn } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "../../../Popper";
import Button from "../../../Button";
import AccountItem from "../../../AccountItem";



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
                <Button text >Up load</Button>
                <Button primary >Log in</Button>
            </div>
        </div>
    </header >);
}

export default Header;