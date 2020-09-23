import { connect } from "react-redux";
import Home from "../component/Home";
import { addCount } from "../services/action/action";

const mapDispatchToProps = (dispatch) => ({
  addCountHandler: (data) => dispatch(addCount(data)),
});
const mapStateToProps = (state) => ({
  data: state.Counts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
