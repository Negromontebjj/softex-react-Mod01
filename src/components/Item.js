import PropTypes from 'prop-types'

function Item(props){
    return(
        <>
            <li>
                {props.marca}
                {props.ano_lancamento}
            </li>
            
        </>
    )
}



export default Item
