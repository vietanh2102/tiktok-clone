import styles from './Menu.module.scss'
import Tippy from '@tippyjs/react/headless';

import {Wrapper as PopperWrapper} from '../index'
import MenuItems from './MenuItems';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Header from './Header';

const cx=classNames.bind(styles)

function MenuItem({children,item,onChange}) {
    const [menu,setMenu] = useState([{data:item}])
    const current = menu[menu.length-1]

    const renderItems=()=>{
        return current.data.map((item,index,)=>{
            const parent= !!item.children
            return(
                <MenuItems 
                    key={index} 
                    data={item} 
                    onClick={() => {
                        if(parent){
                            setMenu(prev => [...prev,item.children])
                        }else{
                            onChange(item)
                        }
                    }} 
                />
            )
            })
    }
    return (
        <Tippy
            delay={[0,500]}
            interactive
            render={(attrs)=>(
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('popper-menu')}>
                    {menu.length > 1 && <Header title={'Languege'} onBack={()=>(
                        setMenu(prev => prev.slice(0,prev.length - 1))
                    )} />}
                    <div className={cx('scroll')}>{renderItems()}</div>
                </PopperWrapper>
            </div>
            )}
            onHide={()=>(
                setMenu(prev => prev.slice(0,1))
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuItem;