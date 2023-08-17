import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from './redux/reducer/titleSlice';

const Demo1: React.FC = () => {
    const title = useSelector((state: any) => state.title.value);
    const dispatch = useDispatch();
    
    const onChange = (e: any) => {
        dispatch(update(e.target.value as string));
    }

    return (
        <div>
            <input type='text' value={title} onChange={onChange} />
            <button>修改</button>
        </div>
    )
}

export default Demo1;