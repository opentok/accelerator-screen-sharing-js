![logo](tokbox-logo.png)

# Accelerator Screensharing for Javascript<br/>Version 1.0.+

## Quick start

The OpenTok Screensharing Accelerator Pack provides functionality you can add to your OpenTok applications that enables users to share the screen.
This section shows you how to use the accelerator pack.

## Install

```bash
$ npm install --save opentok-screen-sharing
```

If using browserify or webpack:

```javascript
const screenSharing = require('opentok-screen-sharing');
```

Otherwise, include the accelerator pack in your html:

```html
<script src="../your/path/to/opentok-screen-sharing.js"></script>
```
 . . . and it will be available in global scope as `ScreenSharingAccPack`

-----------------

Click [here](https://www.npmjs.com/search?q=opentok-acc-pack) for a list of all OpenTok accelerator packs.

## Exploring the code

The `ScreenShareAccPack` class in opentok-screen-sharing.js is the backbone of the screen share feature for the app.

This class sets up the screen share UI views and events, and provides functions for sending, receiving, and rendering shared screens.

#### Initialization

The following `options` fields are used in the `ScreenShareAccPack` constructor:<br/>

 Feature        | Field  | Required
 ------------- | ------------- | ------------
 Set the OpenTok session  (object).| `session` |`true`
 Set the screen container (string). | `screenSharingContainer`  |`false`
 Set the Common layer API (object). | `accPack` |`false`
 Set the ID of the Chrome extension (string). | `extensionID` |`false`
 Set the download path for the FireFox extension (string). | `extentionPathFF` |`false`
 Set the container to append the start/stop button (string).| `controlsContainer` |`false`
Set custom properties for the publisher (object)| `screenProperties`|`false`
Allow screen sharing over `http` in development (boolean)| `dev`|`false`


Once you define the options, you simply create a new instance of the  `ScreenShareAccPack`:

```javascript
      var screenShareOptions = {
       accPack: _this,
       session: _session,
       extensionID: _options.screenShare.extensionID,
       extentionPathFF: _options.screenShare.extentionPathFF,
       screensharingParent: _options.screenShare.screensharingParent,
     };

     var screenSharing = new ScreenShareAccPack(screenShareOptions);
```


#### ScreenShareAccPack Methods

The `ScreenShareAccPack` component has the following methods:

| Method        | Description  |
| ------------- | ------------- |
| `extensionAvailable()` | 	Test whether an extension is available.  |
| `start()` | Start sharing screen.  |
| `end()` | Stop sharing screen.  |


#### Events

The `ScreenSharingAccPack` component emits the following events:

 Event        | Description
 ------------- | -------------
 `startScreenSharing ` | We've started publishing/sharing the screen.
 `endScreenSharing ` | We've stopped publishing/sharing the screen.
 `screenSharingError ` | A screen sharing error occurred.


If using the common layer, you can subscribe to these events by calling `registerEventListener` on  `_accPack` and providing a callback function:

```javascript
_accPack.registerEventListener('eventName', callback)
```

### One to one sample app using the Accelerator Screensharing with best-practices for Javascript (https://github.com/opentok/one-to-one-screen-annotations-sample-apps).