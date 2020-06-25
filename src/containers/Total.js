import { connect } from 'react-redux'
import Total from '../components/Total'

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}

export default connect(mapStateToProps)(Total)
