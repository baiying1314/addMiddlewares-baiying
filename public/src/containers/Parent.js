import {connect} from "react-redux";
import Parent from '../components/Parent'

const mapStateToProps = (state)=>{
    return {
        person:state.Parent
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onAdd: (name,age)=> {
            dispatch({type: "PADD", name,age})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Parent)