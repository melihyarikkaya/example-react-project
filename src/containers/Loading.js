import { connect } from 'react-redux';
import Loading from '../components/Loading';
import { setIsloading } from '../actions/actions';

const mapStateToProps = state => ({
  isLoading: state.loggerReducer.isLoading
});

const mapDispatchToProps = {
  setIsloading
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
