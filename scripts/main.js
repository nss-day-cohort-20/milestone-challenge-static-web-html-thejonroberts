//blog entries
const blogEntries = [
	{
		date: "June 1, 2017",
		title: "Week 1",
		paragraphs: ["Monday: lorem ipsum", 
					"Tuesday: snorem skipsum",
					"Wednesday: moer ipsum",
					"Thursday: some stuff",
					"Friday: Lab times"
					]
		// imageURL: ,
	},
	{
		date: "June 8, 2017",
		title: "Week 2",
		paragraphs: ["Monday: lorem ipsum", 
				"Tuesday: snorem skipsum",
				"Wednesday: moer ipsum",
				"Thursday: some stuff",
				"Friday: Lab times"
				]
		// imageURL: ,
	}];
	// console.log('blogEntry',blogEntries.length, blogEntries);

//initialize Blog DOM element
let blog = document.getElementById("blogPosts");
let blogPostHTML = "";

//format individualposts to HTML
function formatPostHTML(j) {
	let paragraphHTMLString = "";
	for (i=0; i < blogEntries[j].paragraphs.length; i++) {
	paragraphHTMLString += `<p>${blogEntries[j].paragraphs[i]}</p>`;
	}
	blogPostHTML += `<article>
				<h3>${blogEntries[j].title}</h3>
				<span>${blogEntries[j].date}</span>
				${paragraphHTMLString}
				</article>`;
	}

//create total blog looping through individual HTML
function combinePosts() {
	for (var j = (blogEntries.length - 1); j >= 0; j--) {
		formatPostHTML(j);
	}
}
combinePosts();		// console.log('blogPost', blogPostHTML);

//write combined posts to DOM
function blogPostDOM() {
	blog.innerHTML = blogPostHTML;
}
blogPostDOM();
