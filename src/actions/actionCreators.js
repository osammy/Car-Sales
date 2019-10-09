import * as actions from './actions';


export const buyItem = (feature) => {
    return {type:actions.ADD_FEATURE,payload:feature};
}

export const removeFeature = (feature) => {
    return {type:actions.REMOVE_FEATURE,payload:feature};
}