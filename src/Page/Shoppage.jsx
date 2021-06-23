import React from "react"
import CollectionOverview from "../Components/Collections/collection.overview.jsx";
import { Route } from "react-router-dom";
import collectionPage from "./category/CollectionPage.jsx";

const ShopPage = ({match}) => {
    console.log(match)
    return (
    <div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={collectionPage} />
    </div>
    )};

export default (ShopPage);