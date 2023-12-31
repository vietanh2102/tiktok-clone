import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from "../components/sidebar";
const cx=classNames.bind(styles)
function DefaultLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('conten')}>{children}</div>
            </div>
        </div>
     );
}

export default DefaultLayout;