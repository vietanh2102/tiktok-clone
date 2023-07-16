import { useEffect,useState } from "react";
const useDebounce=(value, delay ) => {
    const [debounce,setDebound] = useState(value)
    useEffect(()=>{
        const handler = setTimeout(()=>(
            setDebound(value)
        ),delay)
        return() => clearTimeout(handler)
    },[value])

    return debounce
}
export default useDebounce;