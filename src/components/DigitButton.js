import { ACTIONS } from "../App"
export default function OperationButton ({dispatch, digit}) {
    return (
<button className='calculator__button' onClick={()=>dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>{digit}</button>
    )
    
}