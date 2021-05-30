
import {useState} from 'react'

const SearchCharacters = ({getQuery}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q);
        getQuery(q)

    }

    return (
        <section className='search'>
            <div className="form">
                <input type="text" value={text} onChange={(e) => onChange(e.target.value)} className="form-control" placeholder="Search Characters..." autoFocus />
            </div>        
        </section>
    )
}

export default SearchCharacters
