import styles from './Header.module.scss'
import { MessageIcon,InboxIcon } from '../Icon';
import {Logo} from '../../../../assets/images/logo';
import Button from '../Button';
import MenuItem from '../Popper/Menu';
import img from '../../../../assets/images/lanhuong.jpg'
import Search from '../Search';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisVertical,faPlus,faQuestion,faKeyboard,faEarthAmericas,
    faArrowRightFromBracket,
    faGear,
    faCoins,
    faBookBookmark,
    faUser, } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx=classNames.bind(styles)
const currentUser=true
const MENU_ITEMS=[
    {
        title:'Language',
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        children:{
            title:'languege',
            data:[
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
                {
                    code:'en',
                    title:'English',
                },
                {
                    code:'vi',
                    title:'Tiếng Việt',
                },
            ]
        }
    },
    {
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faQuestion} />,
        to:'feedback'
    },
    {
        title:'Keyboard shortcuts',
        icon:<FontAwesomeIcon icon={faKeyboard} />
    }
]
const MENU_USER =[
    {
        title:'Views Profile',
        icon:<FontAwesomeIcon icon={faUser} />,
    },
    
    {
        title:'Favorites',
        icon:<FontAwesomeIcon icon={faBookBookmark} />,
        separate:true
    },
    {
        title:'Get Coins',
        icon:<FontAwesomeIcon icon={faCoins} />
    },
    {
        title:'Setting',
        icon:<FontAwesomeIcon icon={faGear} />
    },
    ...MENU_ITEMS,
    {
        title:'Log Out',
        icon:<FontAwesomeIcon icon={faArrowRightFromBracket} />,
        separate:true
    }
]
function Header() {
    // const handleOnchangeMenu=(menuItem)=>{
    //     console.log(menuItem);
    // }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={'/'} className={cx('logo')}>
                    <Logo />
                </Link>
                <Search />
                <div className={cx('action')}>
                    <Button primary>
                        <FontAwesomeIcon style={{ marginRight: 8 }} icon={faPlus} />
                        <span>Upload</span>
                    </Button>
                    {currentUser ? (
                        <>
                        <Tippy delay={[0, 50]} content="Message" placement="bottom">
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Message" placement="bottom">
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                            </button>
                        </Tippy>
                        </>
                    ) : (
                        <Button logIn> Log in </Button>
                    )}
                    <MenuItem item={currentUser ? MENU_USER : MENU_ITEMS} >
                        {currentUser ? (
                            <img src={img} alt='Lan Huong' className={cx('user-avatar')}></img>
                        ) : (

                            <button className={cx('list')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </MenuItem>
                    
                </div>
            </div>

        </header>
    );
}

export default Header;