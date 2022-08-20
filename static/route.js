let app_div = document.getElementById('app');
const urlPageTitle = "mnDevs VJR";

const urlRoutes = {
	"dashboard": {
		template: "templates/dashboard.html",
		header: "templates/header.html",
		headerscript: "script/header.js",
		script: "script/dashboard.js",
		style: "css/dashboard.css",
		title: "Dashboard | " + urlPageTitle,
		description: "This is the home page",
	},
	"about": {
		template: "templates/about.html",
		header: "templates/header.html",
		script: "script/about.js",
		headerscript: "script/header.js",
		style: "css/about.css",
		title: "About | " + urlPageTitle,
		description: "This is the home page",
	},
	"contact": {
		template: "templates/contact.html",
		header: "templates/header.html",
		headerscript: "script/header.js",
		script: "script/contact.js",
		style: "css/contact.css",
		title: "Contact | " + urlPageTitle,
		description: "This is the home page",
	},
	"home": {
		template: "templates/home.html",
		header: "templates/header.html",
		script: "script/dashboard.js",
		headerscript: "script/header.js",
		style: "css/dashboard.css",
		title: "Home | " + urlPageTitle,
		description: "This is the home page",
	},
	"login": {
		template: "templates/login.html",
		header: "templates/header.html",
		headerscript: "script/header.js",
		script: "script/login.js",
		style: "css/login.css",
		title: "Login | " + urlPageTitle,
		description: "Login to IMS",
	},
};

const router = async () => {
	const pagelocation = sessionStorage.getItem('page')
		//set the sessions page to homepage if no page is set

	if (pagelocation === null) {
		sessionStorage.setItem('page', 'home')
		location.reload();
	}
	const route = urlRoutes[pagelocation];
	//get the header
	const header = await fetch(route.header).then((response) => response.text());
	//get the specific page
	const html = await fetch(route.template).then((response) => response.text());
	//get the specific page script file

	const script = document.createElement("script");
	script.src = route.script;
	//get the header file for changing the page

	const headerscript = document.createElement("script");
	headerscript.src = route.headerscript;
				//get the style file for the page

	const css = document.createElement("link");
	css.rel = "stylesheet";
	css.href = route.style;

			//append all the assets to the page

	app_div.innerHTML = header + html;
	document.head.appendChild(script);
	document.head.appendChild(headerscript);
	document.head.appendChild(css);
	document.title = route.title;
	document.querySelector('meta[name="description"]').setAttribute("content", route.description);
};

//function for changing the page

const changePage = (page)=> {
	sessionStorage.setItem('page', page);
	location.reload();
}
window.onload = router();