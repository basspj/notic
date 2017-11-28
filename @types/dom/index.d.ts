interface ReactDevToolsGlobalHook {
  _renderers: any;
}

interface Window {
  __REACT_DEVTOOLS_GLOBAL_HOOK__: ReactDevToolsGlobalHook;
  devToolsExtension: any;
  __INITIAL_STATE__: any;
  Promise: any;
}

let window: Window;
