var source = $("#some-template").html();
var template = Handlebars.compile(source);

var data = {
    experiences: [
      {
        icon: "fa-file-text-o",
        link: "resume.pdf",
        title: "Resume // pdf",
        description: "Hello world!"
      }
    ]
  };
//
// var data = {
//     users: [ {
//         person: {
//             firstName: "Garry",
//             lastName: "Finch"
//         },
//         jobTitle: "Front End Technical Lead",
//         twitter: "gazraa"
//     }, {
//         person: {
//             firstName: "Garry",
//             lastName: "Finch"
//         },
//         jobTitle: "Photographer",
//         twitter: "photobasics"
//     }, {
//         person: {
//             firstName: "Garry",
//             lastName: "Finch"
//         },
//         jobTitle: "LEGO Geek",
//         twitter: "minifigures"
//     } ]
// };

Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

$('body').append(template(data));
