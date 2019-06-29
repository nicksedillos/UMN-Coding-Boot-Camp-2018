// Receive survey responses. Doesn't work.
$("survey").submit(function() {
    event.preventDefault();
	console.log("Click!");
	var newFriend = {
		name: $("userName").val().trim(),
		photo: $("userPhotoURL").val().trim(),
		scores: [
			$("input[name=surveyResponse1]:radio").val(),
			$("input[name=surveyResponse2]:radio").val(),
			$("input[name=surveyResponse3]:radio").val(),
			$("input[name=surveyResponse4]:radio").val(),
			$("input[name=surveyResponse5]:radio").val(),
			$("input[name=surveyResponse6]:radio").val(),
			$("input[name=surveyResponse7]:radio").val(),
			$("input[name=surveyResponse8]:radio").val(),
			$("input[name=surveyResponse9]:radio").val(),
			$("input[name=surveyResponse10]:radio").val()
		]
	};
	console.log(newFriend);
	friendsData.push(newFriend);
});

/*
To do:
	Validate survey responses (ensure that user has answered each of the questions).
	Provide user feedback upon successful submission.
*/