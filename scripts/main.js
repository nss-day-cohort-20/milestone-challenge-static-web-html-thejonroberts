//blog entries
const blogEntry = {
	date: "June 1, 2017",
	title: "Week 1",
	paragraphs: ["Monday: lorem ipsum", 
				"Tuesday: snorem skipsum",
				"Wednesday: moer ipsum"
				]
	// imageURL: ,
	};
	// console.log('blogEntry', blogEntry);

//put blog entry into blog posts
//let blogPosts = {};
//function combineEntries() {}

//format posts to HTML
let blog = document.getElementById("blogPosts");
let blogPostHTML = "";

function formatPostHTML() {
	let paragraphHTMLString = "";
	for (i=0; i < blogEntry.paragraphs.length; i++) {
		paragraphHTMLString += `<p>${blogEntry.paragraphs[i]}</p>`;
		};
	blogPostHTML = `<article>
					<h3>${blogEntry.title}</h3>
					${paragraphHTMLString}
					<span>${blogEntry.date}</span>
				</article>`
}
formatPostHTML();
console.log('blogPost', blogPostHTML);

//write blogPost to DOM
function blogPostDOM() {
	blog.innerHTML += blogPostHTML;
}
blogPostDOM();

//put all blog posts into Blog Section
// let blogSection = {};
// function formaBlogSection() {}


// <section id="blog">
// 			<h2>Blog</h2>
// 			<div class="sectionFlexContainer">
// 				<!-- PRIMARY-CONTENT -->
// 				<div class="primaryContent">
// 					<article>
// 							<h3>Heading</h3>
// 							<p></p>
// 					</article>
// 				</div> <!-- primaryContent -->
// 				<!-- SECONDARY CONTENT -->
// 				<div class="secondaryContent">
// 					<article>
// 						<h5>Extra Info</h5>
// 						<p></p>
// 						<p></p>
// 					</article>
// 				</div><!-- secondaryContent -->
// 				<!-- TERTIARY CONTENT -->
// 				<div class="tertiaryContent">
// 					<article>
// 					<img src="./images/jonRoberts200.png" alt="Photo of Jon Roberts">
// 					<h5>Extra Info</h5>
// 						<p></p>
// 					</article>
// 				</div><!-- tertiaryContent -->
// 			</div><!-- sectionFlexContainer -->	
// 		</section><!-- SECTION ID -->