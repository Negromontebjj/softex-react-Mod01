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

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

export default Item