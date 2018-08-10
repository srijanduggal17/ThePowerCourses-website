//Firebase initialization
const config = {
	apiKey: "AIzaSyBmNSU0Ukje3nEFARhxIL_ba8jwlgvwspQ",
	databaseURL: "https://powercourses-eea9f.firebaseio.com"
};
firebase.initializeApp(config);

//Gets data from firebase and updates sidebar photo and schedule
const webRef = firebase.database().ref('website');
webRef.once('value')
	.then(snapshot => {
		const webData = snapshot.val();
		document.getElementById('actside').src = webData.photos.actpage;
		document.getElementById('schedule').src = webData.schedules.act;
		document.getElementById('scheduleDownload').href = webData.schedules.act;
	});