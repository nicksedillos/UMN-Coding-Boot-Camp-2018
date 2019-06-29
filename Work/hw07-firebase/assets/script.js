  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDOsOlGj7oQ9XPdNrFL9pN2pq5jzT6Ho80",
    authDomain: "train-scheduler-7cd90.firebaseapp.com",
    databaseURL: "https://train-scheduler-7cd90.firebaseio.com",
    projectId: "train-scheduler-7cd90",
    storageBucket: "train-scheduler-7cd90.appspot.com",
    messagingSenderId: "501000565158"
  };
  firebase.initializeApp(config);

/*  
When adding trains, administrators should be able to submit the following:
	Train Name
	Destination 
	First Train Time -- in military time
	Frequency -- in minutes
	Code this app to calculate when the next train will arrive; this should be relative to the current time.
	Users from many different machines must be able to view same train times.
	Styling and theme are completely up to you. Get Creative!
*/