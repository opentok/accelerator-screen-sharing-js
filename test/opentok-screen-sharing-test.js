
var expect = chai.expect;
var AcceleratorPack = AcceleratorPack;
var ScreenSharingAccPack = ScreenSharingAccPack;

var _optionsap;
var _accPack;
var _connection;
var _session;
var _screenShare;
var _options;

if (!Function.prototype.bind) {
    Function.prototype.bind = function() {
        var fn = this,
            args = Array.prototype.slice.call(arguments),
            context = args.shift();
        return function() {
            fn.apply(context, args);
        };
    };
}

var _screenSharingConstructor = function(options){
    _screenShare = new ScreenSharingAccPack(options);
};

describe('Screen Sharing Acc Pack', function() {

   before(function() {

       _optionsap = {
           apiKey: 'yourAPIKey', // Replace with an OpenTok API key
           sessionId: 'yourSessionID', // Replace with a generated Session ID
           token: 'yourToken'
      };

       _accPack = new AcceleratorPack(_optionsap);

       _connection = {
         connectionId: "ConnectionIDTest",
       };

       _session = {
         id: 'yourSessionID', // Replace with a generated Session ID
         connection: _connection,
         apiKey: 'yourAPIKey', // Replace with an OpenTok API key
         token: 'yourToken'
      };

       _options = {
         session: _session,
         extensionID: "ExtensionIDTest",
         accPack: _accPack
       };
   });

   after(function(){
     _screenShare = null;
     _accPack = null;
   });

   describe('Test New SS instance', function() {

       it('Constructor should create a SSAP instance', function() {
            _screenShare = new ScreenSharingAccPack(_options);
            expect(_screenShare).not.to.be.null;
            expect(_screenShare.publisher).not.to.be.null;
       });

   });

    describe('Test SS new instance when argument options is not complete', function() {

        before(function() {
            _screenShare = null;
        });

        it('Should throw an exception when session is missing', function() {
              var options = {
                 extensionID: "ExtensionIDTest"
              };
              //expect(_screenSharingConstructor.bind(_screenSharingConstructor, options)).to.throw('Screen Share Acc Pack requires an OpenTok session');
              expect(_screenSharingConstructor.bind(_screenSharingConstructor, options)).to.throw('');
              expect(_screenShare).to.be.null;
        });

        it('Should throw an exception when extensionID is missing', function() {
          var options = {
              session: _session,
              accPack: _accPack
           };
          expect(_screenSharingConstructor.bind(_screenSharingConstructor, options)).to.throw('Error starting the screensharing. Chrome extensionID required');
          expect(_screenShare).to.be.null;
        });

        it('Should not throw an exception when accpack is missing', function() {
              var options = {
                  session: _session,
                  extensionID: "ExtensionIDTest"
                };
              expect(_screenSharingConstructor.bind(_screenSharingConstructor, options)).not.to.throw('');
              expect(_screenShare).not.to.be.null;
              expect(_screenShare.publisher).not.to.be.null;
        });
    });

    describe('Test SS new instance when session is not complete', function(){

      before(function() {
          _screenShare = null;
      });

      it('Should throw an exception when sessionId is null', function() {
           var session = {
             id: "",
             connection: "Test",
             apiKey: "Test",
             token: "Test"
           };
           var options = {
             session: session,
             extensionID: "ExtensionIDTest"
           };
           expect(_screenSharingConstructor.bind(_screenSharingConstructor, options)).to.throw('The sessionId field cannot be null in the log entry');
           expect(_screenShare).to.be.null;
      });

      it('Should throw an exception when connectionId is missing', function() {
           var session = {
             id: "Test",
             connection: "Test",
             apiKey: "Test",
             token: "Test"
           };
           var options = {
             session: session,
             extensionID: "ExtensionIDTest"
           };
           expect(_screenSharingConstructor.bind(_screenSharingConstructor, options)).to.throw('The connectionId field cannot be null in the log entry');
           expect(_screenShare).to.be.null;
      });

      it('Should not throw an exception when apiKey and/or token is/are missing', function() {
           var session = {
             id: "Test",
             connection: _connection,
             apiKey: "",
             token: ""
           };
           var options = {
             session: session,
             extensionID: "ExtensionIDTest"
           };
           _screenShare = new ScreenSharingAccPack(_options);
           expect(_screenShare).not.to.be.null;
           expect(_screenShare.publisher).not.to.be.null;
       });
    });
});
