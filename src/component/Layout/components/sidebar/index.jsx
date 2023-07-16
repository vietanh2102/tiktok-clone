import className from "classnames/bind";
import styles from './Sidebar.module.scss';
import Button from "../Button";

const cx=className.bind(styles)

function Sidebar() {
    return ( 
        <aside className={cx('wrap')}>
            <Button larger>Follow</Button>
            <h1>Sidebar 1</h1>
        </aside>
     );
}

export default Sidebar;