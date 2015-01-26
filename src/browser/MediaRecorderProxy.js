/*global Windows:true */

var cordova = require('cordova'),
    MediaRecorder = require('com.reallyenglish.cordova.plugin.browser-media-recorder.BrowserMediaRecorder');

var Recorder = module.exports = {

    // Initiates the audio file
    create:function(win, lose, args) {
    },

    // Start recording audio
    startRecordingAudio:function(win, lose, args) {
        var id = args[0];
        var src = args[1];
    },

    // Stop recording audio
    stopRecordingAudio:function(win, lose, args) {
        var id = args[0];
        var thisM = Media.get(id);
    },

    // Release the media object
    release:function(win, lose, args) {
        var id = args[0];
        var thisM = Media.get(id);
        try {
            delete thisM.node;
        } catch (err) {
            lose("Failed to release: "+err);
        }
    }
};

module.exports = Recorder;
require("cordova/exec/proxy").add("MediaRecorder",module.exports);
