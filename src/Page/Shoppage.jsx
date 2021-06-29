import React from "react"
import { Route } from "react-router-dom";
import { fetchCollectionsStartAsync } from "../react/shop/shop.action";
import {connect} from "react-redux";
import CollectionOverviewContainer from "../Components/Collections/collection-overview.container.jsx";
import CollectionPageContainer from "./collection-page/collection-page.container";

class ShopPage extends React.Component {


  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync();
    
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);