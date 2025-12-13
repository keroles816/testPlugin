
import MapClick from './components/MapClick/MapClick.component';
import MapClickResult from './components/MapClickResult/MapClickResult.component';
import defaultLocalization from './messages';
import { LOCALIZATION_NAMESPACE } from './constants/constants';
import FormBulider from './components/FormBulider/FormBuilder';

import testingPluginReducer from './components/reducers';
import * as testingPluginActions from './components/selectors';
import * as testingPluginSelectors from './components/actions';

const reducers={testingPluginReducer}
const actions={...testingPluginActions}
const selctors={...testingPluginSelectors}

MapClick.Title = LOCALIZATION_NAMESPACE + ":title";
MapClick.Icon = LOCALIZATION_NAMESPACE + ":icon";

const components = {
    MapClick,
    MapClickResult,
    FormBulider
};


const localization = {
    namespace: LOCALIZATION_NAMESPACE,
    defaultLocalization    
}




export { components, localization, reducers, selctors, actions};
