var exec = require('phonegap/exec');

/**
 * The Capture interface exposes an interface to the camera and microphone of the hosting device.
 */
function Capture() {
	this.supportedAudioModes = [];
	this.supportedImageModes = [];
	this.supportedVideoModes = [];
}

/**
 * Launch audio recorder application for recording audio clip(s).
 *
 * @param {Function} successCB
 * @param {Function} errorCB
 * @param {CaptureAudioOptions} options
 */
Capture.prototype.captureAudio = function(successCallback, errorCallback, options){
    navigator.device.capture._capture("captureAudio", successCallback, errorCallback, options);
};

/**
 * Launch camera application for taking image(s).
 *
 * @param {Function} successCB
 * @param {Function} errorCB
 * @param {CaptureImageOptions} options
 */
Capture.prototype.captureImage = function(successCallback, errorCallback, options){
    navigator.device.capture._capture("captureImage", successCallback, errorCallback, options);
};

/**
 * Launch device camera application for recording video(s).
 *
 * @param {Function} successCB
 * @param {Function} errorCB
 * @param {CaptureVideoOptions} options
 */
Capture.prototype.captureVideo = function(successCallback, errorCallback, options){
    navigator.device.capture._capture("captureVideo", successCallback, errorCallback, options);
};

/**
 * Launches the correct capture.
 *
 * @param (DOMString} type 
 * @param {Function} successCB
 * @param {Function} errorCB
 * @param {CaptureVideoOptions} options
 */
Capture.prototype._capture = function(type, successCallback, errorCallback, options){
    var win = function(result) {
        var mediaFiles = [];
        var i;
        for (i = 0; i < pluginResult.message.length; i++) {
            var mediaFile = new MediaFile();
            mediaFile.name = pluginResult.message[i].name;
            mediaFile.fullPath = pluginResult.message[i].fullPath;
            mediaFile.type = pluginResult.message[i].type;
            mediaFile.lastModifiedDate = pluginResult.message[i].lastModifiedDate;
            mediaFile.size = pluginResult.message[i].size;
            mediaFiles.push(mediaFile);
        }
        successCallback(mediaFiles);
    };
    exec(win, errorCallback, "Capture", type, [options]);
};

module.exports = new Capture();
