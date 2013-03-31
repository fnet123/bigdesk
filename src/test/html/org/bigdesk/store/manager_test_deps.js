// This file was autogenerated by calcdeps.py
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/state/Head.js", ['org.bigdesk.state.Head'], ['org.bigdesk.state.State', 'org.bigdesk.store.Manager', 'org.bigdesk.store.event.EventType', 'goog.events', 'goog.Disposable']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/state/State.js", ['org.bigdesk.state.State'], []);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/store/Manager.js", ['org.bigdesk.store.Manager'], ['org.bigdesk.store.event.ManagerDisposed', 'org.bigdesk.store.event.StoreWhippedOut', 'org.bigdesk.store.event.DataAdd', 'org.bigdesk.store.event.DataRemove', 'org.bigdesk.store.event.RequestError', 'org.bigdesk.store.snapshot.load.event.SnapshotLoadProgress', 'org.bigdesk.store.snapshot.load.event.SnapshotLoadDone', 'org.bigdesk.store.Store', 'org.bigdesk.net.DefaultServiceProvider', 'goog.async.Delay', 'goog.object', 'goog.Uri', 'goog.events.EventTarget', 'goog.events', 'goog.debug.Logger']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/store/Store.js", ['org.bigdesk.store.Store'], ['goog.array', 'goog.Disposable']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/store/event/DataAdd.js", ['org.bigdesk.store.event.DataAdd'], ['goog.events.Event']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/store/event/DataRemove.js", ['org.bigdesk.store.event.DataRemove'], ['goog.events.Event']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/store/event/EventType.js", ['org.bigdesk.store.event.EventType'], ['goog.events']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/store/event/ManagerDisposed.js", ['org.bigdesk.store.event.ManagerDisposed'], ['org.bigdesk.store.event.EventType', 'goog.events.Event']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/store/event/RequestError.js", ['org.bigdesk.store.event.RequestError'], ['goog.events.Event']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/store/event/StoreWhippedOut.js", ['org.bigdesk.store.event.StoreWhippedOut'], ['org.bigdesk.store.event.EventType', 'goog.events.Event']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/store/snapshot/load/LoadHandler.js", ['org.bigdesk.store.snapshot.load.LoadHandler', 'org.bigdesk.store.snapshot.load.StoreSourceType', 'org.bigdesk.store.snapshot.load.StorePart'], ['org.bigdesk.store.snapshot.load.event.SnapshotLoadProgress', 'org.bigdesk.store.snapshot.load.event.SnapshotLoadDone', 'goog.net.Jsonp', 'goog.array', 'goog.object', 'goog.string', 'goog.json', 'goog.events.EventTarget', 'goog.events', 'goog.fs.FileReader', 'goog.async.DeferredList', 'goog.debug.Logger']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/store/snapshot/load/event/EventType.js", ['org.bigdesk.store.snapshot.load.event.EventType'], ['goog.events']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/store/snapshot/load/event/SnapshotLoad.js", ['org.bigdesk.store.snapshot.load.event.SnapshotLoadDone', 'org.bigdesk.store.snapshot.load.event.SnapshotLoadProgress'], ['org.bigdesk.store.snapshot.load.event.EventType', 'goog.events.Event']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/net/DefaultServiceProvider.js", ['org.bigdesk.net.DefaultServiceProvider'], ['org.bigdesk.net.ServiceProvider', 'org.bigdesk.net.XhrService', 'org.bigdesk.net.JsonpService', 'goog.Uri']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/net/JsonpService.js", ['org.bigdesk.net.JsonpService'], ['org.bigdesk.net.Service']);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/net/Service.js", ['org.bigdesk.net.Service'], []);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/net/ServiceProvider.js", ['org.bigdesk.net.ServiceProvider'], []);
goog.addDependency("../../../src/main/javascript_sources/org/bigdesk/net/XhrService.js", ['org.bigdesk.net.XhrService'], ['org.bigdesk.net.Service', 'goog.string.path', 'goog.string', 'goog.net.XhrManager', 'goog.net.XhrManager.Event', 'goog.net.XhrManager.Request', 'goog.Uri', 'goog.Disposable']);
goog.addDependency("../../../src/test/javascript_sources/org/bigdesk/store/TestManager.js", ['org.bigdesk.store.TestManager'], ['org.bigdesk.store.Manager']);
goog.addDependency("../../../src/test/javascript_sources/org/bigdesk/net/NoopService.js", ['org.bigdesk.net.NoopService'], ['org.bigdesk.net.Service']);
goog.addDependency("../../../src/test/javascript_sources/org/bigdesk/net/TestService.js", ['org.bigdesk.net.TestService'], ['org.bigdesk.net.Service', 'goog.debug.Logger']);
goog.addDependency("../../../src/test/javascript_sources/org/bigdesk/net/TestServiceProvider.js", ['org.bigdesk.net.TestServiceProvider'], ['org.bigdesk.net.ServiceProvider', 'org.bigdesk.net.TestService', 'org.bigdesk.net.NoopService', 'goog.Uri']);
