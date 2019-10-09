import React from "react";
import * as actionCreators from "./actions/actionCreators";
import { connect } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  const { buyItem, car, shop, extras, removeFeature } = props;

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures removeFeature={removeFeature} car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} store={shop} />
        <Total car={car} additionalPrice={extras.additionalPrice} />
      </div>
    </div>
  );
};

// export default App;

export default connect(
  state => state,
  actionCreators
)(App);
