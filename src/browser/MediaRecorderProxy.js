/*global Windows:true */

var cordova = require('cordova'),
    BrowserMediaRecorder = require('com.reallyenglish.cordova.plugin.browser-media-recorder.BrowserMediaRecorder');
    MediaRecorder = require('com.reallyenglish.cordova.plugin.browser-media-recorder.MediaRecorder');

var Recorder = {

    // Initiates the audio file
    create:function(win, lose, args) {
        var id = args[0];
        var src = args[1];
    },

    // Start recording audio
    startRecordingAudio:function(win, lose, args) {
        var id = args[0];
        var src = args[1];
        var thisM = BrowserMediaRecorder.get(id);
        thisM.recorder = MediaRecorder.getInstance();
        thisM.recorder.record();
    },

    // Stop recording audio
    stopRecordingAudio:function(win, lose, args) {
        var id = args[0];
        var thisM = BrowserMediaRecorder.get(id);
        thisM.stop();
    },

    // play back recording audio
    playRecordingAudio:function(win, lose, args) {
        var id = args[0];
        var thisM = Media.get(id);
        thisM.play();
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
require("cordova/exec/proxy").add("BrowserMediaRecorder",module.exports);
