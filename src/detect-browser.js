function detectBrowser() {

  const navigator = window && window.navigator;

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    return 'not a browser';
  }

  // Firefox.
  if (navigator.mozGetUserMedia) {
    return 'Firefox';
  }
  if (navigator.webkitGetUserMedia) {
    // Chrome, Chromium, Webview, Opera, all use the chrome shim for now
    if (window.hasOwnProperty('webkitRTCPeerConnection')) {
      return 'Chrome';
    }
    if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
      return 'Safari';
    }
    return 'WebKit browser without WebRTC support';
  }

  if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
    return 'Edge';
  }

  if (navigator.userAgent.indexOf('MSIE ') > 0 ||
    !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    return 'Internet Explorer';
  }

  if (navigator.mediaDevices && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
    // Safari, with webkitGetUserMedia removed.
    return 'Safari';
  }
  // Default fallthrough: not supported.
  return 'unsupported browser';
};

function firefoxExtensionRequired() {
  var match = navigator.userAgent.match(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i);
  var version = (match && match.length > 1 && match[1]) || '';
  return version < '52.0';
};
