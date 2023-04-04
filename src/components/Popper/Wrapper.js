import classNames from "classnames/bind";
import stlyes from "./Popper.module.scss";


const cx = classNames.bind(stlyes);


function Wrapper({ children }) {
    return (
        <div className={cx('wrapper')}>{children}</div>
    );
}

export default Wrapper;