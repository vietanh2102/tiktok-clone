import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx =classNames.bind(styles)
function Button({to,href,children,onClick,
    primary=false,
    logIn=false,
    display=false,
    small=false,
    disable=false,
    larger=false,
    leftIcon=false,
    rightIcon=false,
    width=false,
    separate=false,
}) {
    let Comp ='button';
    const classes=cx('wrapper',{
        primary,
        logIn,
        display,
        small,
        disable,
        larger,
        leftIcon,
        rightIcon,
        width,
        separate,
    });
    const props={
        onClick,
    }
    if(to){
        props.to=to
        Comp=Link
    }else if(href){
        props.href=href
        Comp='a'
    }

    return ( 
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
     );
}

export default Button;