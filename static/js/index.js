import Adopt from "./views/adopt.js";
import Home from "./views/home.js";
import About from "./views/about.js"
import Contact from "./views/contact.js"

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/adopt", view: Adopt },
        { path: "/about", view: About },
        { path: "/contact", view: Contact }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#root").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
            window.scrollTo(0,0);
        }
    });

    router();

    document.addEventListener("scroll", () => {
        if (window.scrollY > 41) {
            document.querySelector(".bar").classList.add("bar-bg")
            setTimeout(() => {
                document.querySelector(".bar_logo").src = "./static/location2.png"
            }, '50')
        } else {
            document.querySelector(".bar").classList.remove("bar-bg")
            setTimeout(() => {
                document.querySelector(".bar_logo").src = "./static/location.png"
            }, '50')
        }
    })

    document.addEventListener("click", e => {
        if (e.target == document.querySelector("#title") || e.target == document.querySelector(".bar_logo")) {
            navigateTo(e.path[1].href);
            window.scrollTo(0,0);
        }
        console.log(e.target)
        if (e.target.matches("[data-link]")){
            const barra = document.querySelector("#toggle")
            barra.checked = false
        }
    })

    window.addEventListener('resize', () =>{
        if(window.innerWidth > 900) {
            const barra = document.querySelector("#toggle")
            barra.checked = false
        
        }
    })



});