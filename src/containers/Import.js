import { connect } from 'react-redux'
import Import from '../components/Import'

import { fetchMakes, removeMake } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}
// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: () => dispatch(fetchMakes()),
        removeMake: (index) => dispatch(removeMake(index))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Import)