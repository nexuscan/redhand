(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app;

    // create an object to store the models for each view
    window.APP = {
      models: {
        home: {
          title: 'Home'
        },
        settings: {
          title: 'Settings'
        },
        signout: {
          title: 'Sign Out',
        }
      }
    };
    
    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {
        
      // hide the splash screen as soon as the app is ready. otherwise
      // Cordova will wait 5 very long seconds to do it for you.
      navigator.splashscreen.hide();
        
        //var el = new Everlive('kfPV3CviJkjnGWqn');
        //var data = el.data('donors');
        //        data.create({ 'name' : 'Harper Lee', 'bloodtype' : 'a+', 'deviceid' : 'device.uuid'},
        //    function(data){
        //        alert(JSON.stringify(data));
        //    },
        //    function(error){
        //        alert(JSON.stringify(error));
        //    });

      app = new kendo.mobile.Application(document.body, {
        // you can change the default transition (slide, zoom or fade)
        transition: 'slide',
        
        // comment out the following line to get a UI which matches the look
        // and feel of the operating system
        skin: 'flat',

        // the application needs to know which view to load first
        initial: 'views/home.html'
      });
    }, false);
}());