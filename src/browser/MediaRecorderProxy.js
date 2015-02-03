/*global Windows:true */

var cordova = require('cordova'),
    //BrowserMediaRecorder = require('com.reallyenglish.cordova.plugin.browser-media-recorder.BrowserMediaRecorder');
    BrowserMediaRecorder = require('org.apache.cordova.media.Media');
    MRecorder = require('com.reallyenglish.cordova.plugin.browser-media-recorder.MediaRecorder');

var Recorder = {

    // Initiates the audio file
    create:function(win, lose, args) {
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
        //var id = args[0];
        //var thisM = BrowserMediaRecorder.get(id);
        //thisM.src = window.URL.createObjectURL(this.mRecorder.getData());
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
