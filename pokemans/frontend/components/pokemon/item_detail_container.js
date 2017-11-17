import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
  return {
    item: selectItem(state, ownProps.match.params.itemId)
  };
};

const mapDispatchToProps = () =>{
  return {};
};

export default withRouter(connect(mapStateToProps)(ItemDetail));