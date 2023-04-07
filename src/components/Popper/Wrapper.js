import classNames from "classnames/bind";
import stlyes from "./Popper.module.scss";


const cx = classNames.bind(stlyes);


function Wrapper({ children, className }) {
    return (
        <div className={cx('wrapper', className)}>{children}</div>
    );
}

export default Wrapper;