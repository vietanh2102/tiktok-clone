import Button from '../../Button';
import styles from './Menu.module.scss';
function MenuItems({data,onClick}) {
    return ( 
            <Button leftIcon={data.icon} to={data.to} width onClick={onClick} separate={data.separate}
            >
                {data.title}
            </Button>
     );
}

export default MenuItems;