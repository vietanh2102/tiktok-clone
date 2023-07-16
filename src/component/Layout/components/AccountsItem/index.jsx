import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Accounts.module.scss'
import classNames from 'classnames/bind'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

const cx=classNames.bind(styles)
function AccountsItem({data}) {
    return ( 
            <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
                <img className={cx('avatar')} src={data.avatar} alt={data.last_name} />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}
                        {data.tick && <FontAwesomeIcon className={cx('iconCheck')} icon={faCheckCircle} />}
                        </span>
                    </h4>
                    <h4 className={cx('useName')}>{data.hoaahanassii}</h4>
                </div>
            </Link>
     );
}

export default AccountsItem;