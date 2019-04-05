import { connect } from 'react-redux';
import Loading from '../components/Loading';
import { setIsLoading } from '../actions/actions';

import { State } from '../reducers/combine-reducer';

const mapStateToProps = (state: State) => ({
  isLoading: state.mainReducer.isLoading
});

const mapDispatchToProps = {
  setIsLoading
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
