# VanillaJavascriptRouter(VJR)
## How does it work
It creates a sessionStorage object for the current page that you visited and refreshes the page.

Then it will look witch assets are associated with the requested page.

And then it will append all the objects


## How can i use it
```javascript
	"dashboard": {
		template: "templates/dashboard.html",
		header: "templates/header.html",
		headerscript: "script/header.js",
		script: "script/dashboard.js",
		style: "css/dashboard.css",
		title: "Dashboard | " + urlPageTitle,
		description: "This is the home page",
	},
```

In `static/route.js` there is a constructor called `urlRoutes` in here you can add more "pages" as shown in the codeblock bellow

At the bottom of the file is a function for changing the page.
You can call this function in your own scripts located in the `script/` folder

```javascript
changePage("pagename")
```

# NOTE

The url does NOT change.
The router works with a string that is saved in `sessionStorage`

And you need to upload the files to a (local)webserver.
Otherwise it won't work
