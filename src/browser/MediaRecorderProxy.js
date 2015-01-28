/*global Windows:true */

var cordova = require('cordova'),
    //BrowserMediaRecorder = require('com.reallyenglish.cordova.plugin.browser-media-recorder.BrowserMediaRecorder');
    BrowserMediaRecorder = require('org.apache.cordova.media.Media');
    MRecorder = require('com.reallyenglish.cordova.plugin.browser-media-recorder.MediaRecorder');

var Recorder = {

    // Initiates the audio file
    create:function(win, lose, args) {
        this.mRecorder = MRecorder.getInstance({swfSrc: 'scripts/recorder.swf'});
    },

    // Start recording audio
    startRecordingAudio:function(win, lose, args) {
        this.mRecorder.record();
    },

    // Stop recording audio
    stopRecordingAudio:function(win, lose, args) {
        this.mRecorder.stop();
    },

    // play back recording audio
    startPlayingAudio:function(win, lose, args) {
        this.mRecorder.play();
    },

    // Release the media object
    release:function(win, lose, args) {
        try {
            delete this.mRecorder;
        } catch (err) {
            lose("Failed to release: "+err);
        }
    }
};

module.exports = Recorder;
require("cordova/exec/proxy").add("Media",module.exports);
