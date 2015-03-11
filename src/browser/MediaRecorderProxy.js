/*global Windows:true */

var cordova = require('cordova'),
    //BrowserMediaRecorder = require('com.reallyenglish.cordova.plugin.browser-media-recorder.BrowserMediaRecorder');
    BrowserMediaRecorder = require('org.apache.cordova.media.Media');
    MRecorder = require('com.reallyenglish.cordova.plugin.browser-media-recorder.MediaRecorder');

var Recorder = {

    // Initiates the audio file
    create:function(win, lose, args) {
        var id = args[0];
        this.mRecorder = MRecorder.getInstance({swfSrc: 'scripts/recorder.swf'});
        this.mRecorder.onended = function() {
          BrowserMediaRecorder.onStatus(id, BrowserMediaRecorder.MEDIA_STATE, BrowserMediaRecorder.MEDIA_STOPPED);
        }
    },

    // Start recording audio
    startRecordingAudio:function(win, lose, args) {
        this.mRecorder.record();
    },

    // Stop recording audio
    stopRecordingAudio:function(win, lose, args) {
        var id = args[0];
        var thisM = BrowserMediaRecorder.get(id);
        var dataReady = function(data) {
          thisM.src = window.URL.createObjectURL(data);
          BrowserMediaRecorder.onStatus(id, BrowserMediaRecorder.MEDIA_STATE, BrowserMediaRecorder.MEDIA_STOPPED);
        };
        this.mRecorder.stop();
        this.mRecorder.getData(dataReady);
    },

    // play back recording audio
    startPlayingAudio:function(win, lose, args) {
        this.mRecorder.play();
    }
};

module.exports = Recorder;
require("cordova/exec/proxy").add("Media",module.exports);
