import { connect } from 'react-redux';

import BasicContent from '../components/BasicContent';

const getContent = (content, path) => {
  return content[path] || { title: 'Not Found', body: '' };
}

const mapStateToProps = (state, ownProps) => {
  return {
    content: getContent(state.content.content, ownProps.path)
  }
};

const BasicContentContainer = connect(mapStateToProps)(BasicContent);

export default BasicContentContainer;
