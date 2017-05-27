import { connect } from 'react-redux';
import App from '../App';

import { toggleSidebar } from '../actions/page-context';

const mapStateToProps = (state) => {
  return {
    hideSidebar: state.page.hideSidebar
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
