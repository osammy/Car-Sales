import * as actions from './actions';


export const buyItem = (feature) => {
    return {type:actions.ADD_FEATURE,payload:feature};
}

export const removeFeature = (id) => {
    return {type:actions.ADD_FEATURE,payload:id};
}