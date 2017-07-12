var bio = {
	"name": "Pranav Mudgil",
	"role": "Front-end Web Developer",
	"contacts": {
		"mobile": "+917340907013",
		"email": "pranavmudgil@gmail.com",
		"github": "pranavmudgil",
		"twitter": "pranavmudgil",
		"location": "i.p. extension,patparganj,delhi,110092"
	},
	"biopic": "images/profile_photo.png",
	"welcomeMessage": "Welcome,fellow stranger its nice to see you",
	"skills": ["HTML", "CSS", "Javascript", "AngularJS",  "jQuery",  "Bootstrap", "Linux"]
};

var work = {
	"jobs": [
	{
		"employer": "WildForest Entertainment",
		"title": "ex-manager",
		"location": "delhi,110092",
		"dates": "2013-2014",
		"description": "Held and Manage events."
	},{
    "employer":"Udacity",
		"title" : "Front-end Developer",
		"location":"Chitkara University,rajpura,punjab",
		"dates": "2017",
		"description": "Learning About Front-end"

		}
	]
};

var projects = {
	"projects": [
	{
		"title": "Automatic Room ligthing control",
		"dates": "2016",
		"description": "Created an go green sensor to Control the ligthing of room when none is present inside.",
		"images": ['images/projectperson.jpeg']
	},
	{
		"title": "Udacity Mockup to HTML",
		"dates": "2017",
		"description": "Created an HTML document of a pdf.",
		"images": ['images/mockup.png']
	},
	{
		"title": "Udacity Portfolio",
		"dates": "2017",
		"description": "Portfolio to show work on the Udacity Front-end Nanodegree.",
		"images": ['images/udacity-portfolio-ss.png']
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Chitkara University",
		"location": "Chandigarh-Patiala National Highway (NH- 64), Village Jhansla, Patiala, Punjab 140401",
		"degree": "Bachelor of technology",
		"majors": ["Computer Science Engineering"],
		"dates": "2015-2019",
		"url": "https://www.google.com/chitkara unviersity"
	},
	{
    "name":"Ryan International school",
		"location":" Sector 21/B, Kondli Gharouli Complex, Mayur Vihar, Phase – III, New Delhi, Delhi 110096",
    "degree" : "Pre-primary - senior secondary",
		"majors": ["PCM"],
		"dates": "2015",
		"url" : "https://www.google.com/ryan-international-school-mayur-vihar"
 }
	 ],

	"OnlineCourses": [
	{
		"title": " Front-end Web Developer Nanodegree",
		"school": "Udacity",
		"location" : "Chandigarh-Patiala National Highway (NH- 64), Village Jhansla, Patiala, Punjab 140401",
		"dates": "2017",
		"url": "https://www.udacity.com"
	}
]
};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i++)
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}

	}

	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};

work.display = function() {
	for (var i=0; i< work.jobs.length;i++) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
		
		var formattedlocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
		$(".work-entry:last").append(formattedlocation);
		

	}
};

projects.display = function() {
	for ( var i=0;i< projects.projects.length;i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[i].images.length > 0) {
			for (var j=0; j<projects.projects[i].images.length;j++)
			{
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);

				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
//function to display education
education.display = function() {

	  $("#education").append(HTMLschoolStart);
		for(var i=0;i<education.schools.length;i++){
   
			$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name));
		 $(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
		 $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
		 $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
		 $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
		 $(".education-entry").append(HTMLschoolURL.replace("%data%", education.schools[i].url));
		
	}

   $(".education-entry").append(HTMLonlineClasses);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.OnlineCourses[0].title));
		var formattedschool= HTMLonlineSchool.replace("%data%", education.OnlineCourses[0].school);
		$(".education-entry:last").append(formattedschool);
		
		$(".education-entry").append(HTMLonlineLocation.replace("%data%", education.OnlineCourses[0].location));
		var formatteddate = HTMLonlineDates.replace("%data%", education.OnlineCourses[0].dates);
		$(".education-entry:last").append(formatteddate);
    var formattedurl=HTMLonlineURL.replace("%data%", education.OnlineCourses[0].url);
		$(".education-entry:last").append(formattedurl);

};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
