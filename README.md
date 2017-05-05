![logo](tokbox-logo.png)


[![Build Status](https://travis-ci.org/opentok/accelerator-screen-sharing-js.svg?branch=master)](https://travis-ci.org/opentok/accelerator-screen-sharing-js)
[![GitHub release](https://img.shields.io/github/release/opentok/accelerator-screen-sharing-js.svg)](./README.md)
[![license MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](./.github/LICENSE)
[![npm](https://img.shields.io/npm/v/opentok-screen-sharing.svg)](https://www.npmjs.com/package/opentok-screen-sharing)

-------

# Accelerator Screensharing for Javascript<br/>


## Quick start

The OpenTok Screensharing Accelerator Pack provides functionality you can add to your OpenTok applications that enables users to share the screen. This section shows you how to use the accelerator pack.

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
Append a link tag for Chrome Web Store inline install (boolean) (defaults to `true`). | `appendWebStoreLink` |`false`
Set the download path for the FireFox extension (string). | `extentionPathFF` |`false`
Using screen sharing with the annotation accelerator pack.| `annotation` |`false`
If using annotation, should we use an external window.| `externalWindow` |`false`
Set the container to append the start/stop button (string).| `controlsContainer` |`false`
Append the start/stop button to the DOM| `appendControl` |`false`
Set custom properties for the publisher (object)| `localScreenProperties`|`false`
Allow screen sharing over `http` in development (boolean)| `dev`|`false`

Once you define the options, you simply create a new instance of the  `ScreenShareAccPack`:

```javascript
      const screenShareOptions = {
       session: session,
       extensionID: myChromeExtensionID,
       extentionPathFF: myFirefoxExentionPath,
       screensharingParent: myParentContainer,
     };
     const screenSharing = new ScreenShareAccPack(screenShareOptions);
```

#### ScreenShareAccPack Methods

The `ScreenShareAccPack` component has the following methods:

| Method        | Description  |
| ------------- | ------------- |
| `extensionAvailable()` |  Test whether an extension is available.  |
| `start()` | Start sharing screen.  |
| `end()` | Stop sharing screen.  |

#### Events

The `ScreenSharingAccPack` component emits the following events:

 Event        | Description
 ------------- | -------------
 `startScreenSharing ` | We've started publishing/sharing the screen.
 `endScreenSharing ` | We've stopped publishing/sharing the screen.
 `screenSharingError ` | A screen sharing error occurred.

If using the screen sharing accelerator pack with [Accelerator Core](https://github.com/opentok/accelerator-core-js), you can subscribe to these events by calling `on` on  `otCore` and providing a callback function:

```javascript
otCore.on('eventName', callback)
```

### Multiparty video communication sample app using the Accelerator Screensharing with best-practices for Javascript (https://github.com/opentok/accelerator-sample-apps-js).
