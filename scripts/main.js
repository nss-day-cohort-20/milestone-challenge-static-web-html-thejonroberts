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
	}];
//Work/Portfolio Page ------------------------------------------
let workHTML = `<article>
					<h3>Nashville Software School</h3>
					<p>
						I am currently attending Nashville Software School to learn as much as possible about the craft of Software Development.  It is a six month, full stack program run by some very talented developers and educators.  Please visit the NSS site or contact me for more info.  This page shows some of what I have been working on at NSS.
					</p>
				</article>
				<article>
					<h3>First Project</h3>
					<p>
						This website is an ongoing project, as I refine my skills. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</article>
				<article>
					<h3>Second Project</h3>
					<p>
						This website is an ongoing project as I learn more. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</article>`;
//Links Page ------------------------------------------
let linksHTML = `<article>
				<h3>Keep your tools sharp!</h3>
					<p>Here some of the best resources I have found and used in my work:</p>
					<ul>
						<li>Design:
							<ul>
								<li><a href="https://coolors.co/">coolors.co:</a> A spiffy color palette picker</li>
								<li><a href="https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design">Scotch:</a> S.O.L.I.D: The First 5 Principles of Object Oriented Design</li>
								<li><a href="https://fonts.google.com/">Google Fonts:</a> I can (and have) spent hours selecting fonts here.</li>
							</ul>
						</li>
						<li>HTML/CSS:
							<ul>
								<li><a href="https://teamtreehouse.com/">Treehouse:</a> I really wish I would have paid for this sooner.</li>
								<li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks:</a> Their flexbox guide has been <strong>very</strong>useful!</li>
								<li><a href="https://internetingishard.com/">Interneting is Hard:</a> A good-looking HTML and CSS guide.</li>
								<li><a href="http://learn.shayhowe.com/html-css/">shayhowe.com:</a> "Learn to Code HTML &amp; CSS"</li>
							</ul>
						</li>
						<li>Javascript:
							<ul>
								<li><a href="http://javascript.info/">Javascript.info:</a> Much clearer to me than MDN at first.</li>
								<li><a href="https://developer.mozilla.org/en-US/">Mozilla Developer Network:</a> Duh. Usually makes my brain hurt unless I already get the concept, but very useful for looking up semantics.</li>
								<li><a href="https://github.com/getify/You-Dont-Know-JS">You Don't Know JS:</a> Just getting into this, looks both plainspoken and deep. We'll see how it takes.</li>
							</ul>
						</li>
						<li>Software:
							<ul>
								<li><a href="http://rogerdudler.github.io/git-guide/">git - the simple guide:</a> no deep shit!</li>
								<li><a href="https://scotch.io/bar-talk/best-of-sublime-text-3-features-plugins-and-settings">Scotch:</a> Best of Sublime Text 3: Features, Plugins, and Settings</li>
								<li><a href="https://www.cyberciti.biz/tips/bash-aliases-mac-centos-linux-unix.html">nixCraft:</a> 30 Handy Bash Shell Aliases For Linux / Unix / Mac OS X</li>
							</ul>
						</li>
					</ul>
				</article>
				<article>
					<h3>Podcasts</h3>
					<p>There are a few...  I got started with WTF. The next one that caught me was "You Are Not So Smart." Mostly cognitive bias/behavioral research as it applies to modern living. Warning: It can get depressing.  But don't worry, there are also cookies! "In the Weeds" is really good political policy talk. I will add more to this later.</p>
				</article>
				<article>
					<h3>Fun Stuff</h3>
					<p>Go play <a href="http://candies.aniwey.net/">Candy Box!</a> or <a href="http://candybox2.net/">its sequel</a>!</p>
					<p>Watch <a href="https://www.youtube.com/user/PaulSellersWoodwork">Paul Sellers</a>, the Bob Ross of woodworking.</p>
				</article>`;
//About Me Page ------------------------------------------
bioHTML = `<article>
			<h3>Background</h3>
			<p>
				I grew up in rural southern Indiana, near a small town named Bloomfield.  Our house was perched on a hill on the edge of a valley referred to as 'the American Bottoms,' in eastern Greene County.
			</p>
			<p>
				The area is largely a 'bedroom community', and most people commute to Bloomington, IN to work.  For whatever reason, country life never appealed to me, and I took to the city as soon as I could.  I have since lived in Terre Haute, Bloomington, Chicago, Austin, and have settled, for a while at least, on Nashville.
			</p>
			<p>
				I have worked in a variety of fields in that time.  I graduated from Indiana University with a B.S. in Mathematics Education.  That's when I moved to Chicago and started working in bars and ended up bartending and managing a music venue, called the Mutiny.  I did that for quite a few years before moving to Austin and resuming teaching.  I had a rough year there, and decided to move a little closer to home.  A friend needed a roomie, so I headed to Nashville.
			</p>
			<p>
				I got a sales job with a pretty good company.  I never expected to end up in sales, but it was a tolerable work environment, and I was at least average at it. I met some great friends there, but it grew less and less tolerable as time went on.
			</p>
			<p>
				While all of this was happening, I was always telling myself I should learn how to code. My mom taught Computer Applications classes at the high school.  So we always had a computer and internet (dial-up until 2010--2010!!!), so I was very fortunate to have a decent exposure to tech growing up.  I eventually managed to build a moderately functional website for the venue I bartended at in my spare time.  I made a few runs at CodeAcademy and the like, but would always get distracted by... life.
			</p>
			<p>
				I had been researching "Coding Bootcamps" for a while when I found out about Nashville Software School.  I came to an info session.  John Wark gave us the works.  A guy who founded the school was talking passionately to a handful of people about its goals, patiently answering questions. It did not feel like a sales pitch, as some other info sessions had... I was extremely impressed--with John, yes, but more with the school's straightforward attitude and their approach to education.  Luckily, I was accepted...  Here we go!
			</p>
	</article>`
//Home Page ------------------------------------------
homeHTML = `<article>
				<h3>HTML Challenge Exercise</h3>
				<p>This is a milestone challenge for Nashville Software School.  I hope to have some more content here shortly.</p>
			</article>`
//Contact Page ------------------------------------------
//Page ------------------------------------------
//Page ------------------------------------------
//initialize DOM Element and Nav Links
let primaryContent = document.getElementById("primaryContent");
let contentHeadline = document.getElementById("contentHeadline")
let homeLinkItem = document.getElementById("homeLink");
let workLinkItem = document.getElementById("workLink");
let blogLinkItem = document.getElementById("blogLink");
let bioLinkItem = document.getElementById("bioLink");
let linksLinkItem = document.getElementById("linksLink");
let contactLinkItem = document.getElementById("contactLink");

//---------------=======Event Listeners
blogLinkItem.addEventListener("click", function() {
	contentHeadline.innerHTML = "Blog";
	primaryContent.innerHTML = "";
	combinePosts();
});
// homeLinkItem.addEventListener("click", function() {
// primaryContent.innerHTML = "";
// });
workLinkItem.addEventListener("click", function() {
	contentHeadline.innerHTML = "Portfolio";
	primaryContent.innerHTML = workHTML;
});
linksLinkItem.addEventListener("click", function() {
	contentHeadline.innerHTML = "Links";
	primaryContent.innerHTML = linksHTML;
});
bioLinkItem.addEventListener("click", function() {
	contentHeadline.innerHTML = "About Me";
	primaryContent.innerHTML = bioHTML;
});
// linksLinkItem.addEventListener("click", function() {
// 	contentHeadline.innerHTML = "Portfolio";
// 	primaryContent.innerHTML = "";
// });
homeLinkItem.addEventListener("click", function() {
	contentHeadline.innerHTML = "Welcome!";
	primaryContent.innerHTML = homeHTML;
});

//-------------==========STATIC DOM INSERTIONS----------------


//-------------===========BLOG DOM================------------------
//format individualposts to HTML
function formatPostHTML(j) {
	let paragraphHTMLString = "";
	for (i=0; i < blogEntries[j].paragraphs.length; i++) {
	paragraphHTMLString += `<p>${blogEntries[j].paragraphs[i]}</p>`;
	}
	primaryContent.innerHTML += `<article>
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
