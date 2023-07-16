import {Wrapper as PopperWrapper} from '../Popper';
import AccountsItem from '../AccountsItem';
import styles from './Search.module.scss'
import useDebounce from '../../../../hooks/useDebounce';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState,useRef, useEffect } from 'react';
import { faCircleXmark,faMagnifyingGlass,faSpinner, } from '@fortawesome/free-solid-svg-icons'
import  TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';



const cx=classNames.bind(styles)
function Search() {
    const [searchResult,setSearchResult] = useState([])
    const [searchValue,setSearchValue] = useState('')

    
    const [showResult,setShowResult] = useState(true)
    const [loading,setLoading] = useState(false)
    const debounced = useDebounce(searchValue,500)

    const refInput =useRef()
    const handleClick= ()=>(
        setSearchValue(''),
        refInput.current.focus(),
        setSearchResult([])
        
    )
    useEffect(() => {
        if(!debounced.trim()){
            setSearchResult([])
            return;
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false))
    },[debounced])
    const handleChange=(e)=>{
        const searchValue = e.target.value
        if(!searchValue.startsWith(' ')){
            return setSearchValue(searchValue)
        }
        
    }
    return ( 
        <div>
            <TippyHeadless
                interactive
                visible={showResult && searchResult.length > 0}
                render={attrs=>(
                    <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <p className={cx('title')}>Accounts</p>
                            {searchResult.map((result) => (
                                <AccountsItem key={result.id} data={result} />
    
                            ))}
                        </PopperWrapper></div>
                    )}
                    onClickOutside={()=> setShowResult(false)}
            >
                <div className={cx('search')}>
                    <input
                        ref={refInput}
                        value={searchValue} 
                        placeholder='Search' 
                        onChange={handleChange}
                        onFocus={()=> setShowResult(true) }
                    />
                    {!!searchValue && !loading &&
                    <button className={cx('clear')} onClick={handleClick}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    }
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                        <span className={cx('line')}></span>
                            <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                    </div>
            </TippyHeadless>
        </div>
     );
}

export default Search;