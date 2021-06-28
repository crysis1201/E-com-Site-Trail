import React from "react"
import CollectionOverview from "../Components/Collections/collection.overview.jsx";
import { Route } from "react-router-dom";
import CollectionPage from "./category/CollectionPage.jsx";
import { createStructuredSelector } from "reselect";
import { fetchCollectionsStartAsync } from "../react/shop/shop.action";
import { selectIsCollectionsFetching } from "../react/shop/shop.selector.js";
import { selectIsCollectionsLoaded } from "../react/shop/shop.selector.js";
import {connect} from "react-redux";
import WithSpinner from "../Components/Collections/with-spinner/with-spinner.jsx";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync();
    
  }

  render() {
    const { match, isFetctingCollections, IsCollectionsLoaded } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isFetctingCollections} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={!IsCollectionsLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetctingCollections: selectIsCollectionsFetching,
  IsCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);