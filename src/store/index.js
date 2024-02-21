import {createStore} from 'redux';

import {rootReducer} from './root-reducer';

const store = createStore(
	rootReducer, // author told that we need to piug extension, but i don't know what is that and how to copy his code correctly(30. 2:10)
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.
	__REDUX_DEVTOOLS_EXTENSION__()
);

export {store};
