"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = {
    "tags": [{
        "name": "Work",
        "url": "work",
        "type": "experience",
        "description": "These are some of the things I've done for money."
    }, {
        "name": "Personal",
        "url": "personal",
        "type": "experience",
        "description": "These are some of the things I get up to in my spare time."
    }, {
        "name": "Training",
        "url": "training",
        "type": "experience",
        "description": "These are some of the things I've been taught."
    }, {
        "name": "Talks",
        "url": "talks",
        "type": "experience",
        "description": "These are some of the things I've said to a room of people."
    }, {
        "name": "PHP",
        "url": "php",
        "type": "languages",
        "description": "I've been working with PHP for nearly fifteen years and have built everything from high scale enterprise applications through to small, focused open source libraries. I've even memorized the haystack needle order of all the core methods. Probably."
    }, {
        "name": "Python",
        "url": "python",
        "type": "languages",
        "description": "I've worked with Python mostly to create command line and build tools such as RPM specfile generators and slightly risque website scrapers."
    }, {
        "name": "Ruby",
        "url": "ruby",
        "type": "languages",
        "description": "I use Ruby and Cucumber for all my automated testing needs, hooking into Capybara and PhantomJS for headless testing, along with SitePrism to keep things tidy."
    }, {
        "name": "Javascript",
        "url": "javascript",
        "type": "languages",
        "description": "Starting in the Prototype.js days, my first forays into Open Source were small Javascript libs. Since then I've written complex frontends using Google Maps and jQuery and have begun building things in ReactJS + Express, like this site right here!"
    }, {
        "name": "HTML",
        "url": "html",
        "type": "languages",
        "description": "Hopefully goes without saying for a Web Dev, but I know HTML. I even know HTML5. Sometimes I dream about HTML6."
    }, {
        "name": "CSS & SASS",
        "url": "css-sass",
        "type": "languages",
        "description": "I actually started my career doing table based layouts. I now use SASS for everything. I know which I prefer."
    }, {
        "name": "MySQL & Postgres",
        "url": "mysql-postgres",
        "type": "languages",
        "description": "I sling SQL like it's going out of fashion. Oh, it is? Nah, SQL will never die. I understand indexes and third normal form, and I usually know when to ignore them too."
    }, {
        "name": "Scala",
        "url": "scala",
        "type": "languages",
        "description": "I'm a Scala newbie, but have undertaken training and liked what I saw."
    }, {
        "name": "Silex",
        "url": "silex",
        "type": "frameworks",
        "description": "My weapon of choice, I love this framework. All my personal projects and several of my work ones are in Silex."
    }, {
        "name": "ReactJS",
        "url": "reactjs",
        "type": "frameworks",
        "description": "I'm relatively new to the world of ReactJS, but I'm in love. I've been wanting a framework like this for a long time - a proper view layer for the web. This site here is built in React."
    }, {
        "name": "Symfony",
        "url": "symfony",
        "type": "frameworks",
        "description": "Mostly prototyping and personal projects, I tend to prefer a slimmer, more tailored experience. But naturally, for a PHP dev, I'm comfortable with Symfony and it's components."
    }, {
        "name": "Zend Framework",
        "url": "zend-framework",
        "type": "frameworks",
        "description": "I know Zend Framework 1.x far better than I'd like to. We'll leave it at that."
    }, {
        "name": "Express",
        "url": "express",
        "type": "frameworks",
        "description": "Silex's Javascripty brother, I love them both very much. This site is written in Universal Javascript using Express as it's backend."
    }, {
        "name": "Amazon Web Services",
        "url": "amazon-web-services",
        "type": "devops",
        "description": "I am in the cloud. I've designed and architected services on AWS that handle millions of requests per day on very tight budgets, have undertaken the Architecting on AWS training course from Amazon and am studying for my Solutions Architect certification."
    }, {
        "name": "Service Oriented Architecture & REST",
        "url": "service-oriented-architecture-rest",
        "type": "devops",
        "description": "Both as a user and as an API designer, I love SOA. I've designed envelope formats for component renderers, written multiple RESTful APIs and written clients for consuming them."
    }, {
        "name": "High Scale",
        "url": "high-scale",
        "type": "devops",
        "description": "An app is no good if no-one can see it. Scaling is at the heart of everything I do, from ensuring code is fast and light, to designing cost-effective infrastructure to handle millions of requests per day."
    }, {
        "name": "nginx",
        "url": "nginx",
        "type": "devops",
        "description": "I have a great affection for nginx, mostly garnered through fighting with Apache for so long. I've configured it with self-signed certificates, automated generation of nginx conf files and conducted load test experiments to prove I was right to choose it for high performance applications."
    }, {
        "name": "Redis & Memcached",
        "url": "redis-memcached",
        "type": "devops",
        "description": "Used 'em both, and prefer Redis. Have configured Redis through CloudFormation and debugged more Memcached problems than my brain will allow me to remember."
    }, {
        "name": "Akamai & CloudFront",
        "url": "akamai-cloudfront",
        "type": "devops",
        "description": "I've wired up both Akamai and CloudFront to origin webservers, and come up with sensible cache policies to offload intelligently to them."
    }, {
        "name": "Team Leadership",
        "url": "team-leadership",
        "type": "practices",
        "description": "I've been a tech lead for over three years and love it. Building amazing teams and growing the skills and confidence of my team members is what makes me tick, and there's not a lot I wouldn't do for my teammates."
    }, {
        "name": "Test Driven Development",
        "url": "test-driven-development",
        "type": "practices",
        "description": "Everything I do is TDD. From Open Source libs to internal applications, if there's no unit tests, it's not done. I've unit tested in both PHP and Javascript, so you know I'm serious."
    }, {
        "name": "Behaviour Driven Development",
        "url": "behaviour-driven-development",
        "type": "practices",
        "description": "I like Gherkin so much I write feature files for my tiny toy projects. I've also undertaken professional training, have participated in countless three-amigos sessions and write cuke tests on the daily."
    }, {
        "name": "Open Source",
        "url": "open-source",
        "type": "practices",
        "description": "My entire career is built off the back of Open Source. Wouldn't be fair not to give back? I love writing libraries and mini projects, and especially love it when others get involved. Open source gave me a career, I intend to repay the favour."
    }, {
        "name": "Writing",
        "url": "writing",
        "type": "practices",
        "description": "I love teaching and mentoring, and the easiest way to do that is to write! I'm a right weirdo and actually enjoy writing documentation, both in-code and in formal docs. I totally understand if this colours your opinion of me."
    }, {
        "name": "Speaking",
        "url": "speaking",
        "type": "practices",
        "description": "I was a drama GCSE kid, so I rather like being on stage and performing. Especially when I get to talk about things that really matter to me. Like code. Or mountain bikes. Or why Tangled is probably the best Disney movie ever made."
    }],
    "projects": [{
        "title": "Principal Web Developer & Tech Lead - BBC iPlayer Radio",
        "type": "work",
        "dates": { "start": 2012, "end": 2017 },
        "description": "Leading the team both in terms of software development and line management, my main achievement was the design and implementation of the next-gen PHP platform for iPlayer Radio; from the RPM build tools to package the app through to leading the development of client libraries and application paradigms. The resulting composition based architecture scaled to over a million requests a day on minimal hardware (~ 5 instances total)",
        "external_links": [{
            "title": "Read more on my LinkedIn profile",
            "url": "https://www.linkedin.com/in/alexgisby/"
        }, {
            "title": "See the packages we open-sourced as part of the project.",
            "url": "https://packagist.org/packages/bbc"
        }],
        "tags": ["work", "php", "javascript", "html", "css-sass", "python", "ruby", "silex", "symfony", "zend-framework", "amazon-web-services", "service-oriented-architecture-rest", "team-leadership", "high-scale", "nginx", "redis-memcached", "akamai-cloudfront", "test-driven-development", "behaviour-driven-development", "open-source"]
    }, {
        "title": "Solution10 Libraries",
        "type": "code",
        "dates": { "start": 2014, "end": 2017 },
        "description": "The Solution10 libraries are a set of packages I've written over the years to solve various problems in the PHP space. All of them use Packagist for distribution and TravisCI for continuous integration.",
        "external_links": [{
            "title": "Solution10 on Packagist",
            "url": "https://packagist.org/packages/Solution10"
        }, {
            "title": "Solution10 on GitHub",
            "url": "https://github.com/Solution10"
        }],
        "tags": ["personal", "php", "open-source"]
    }, {
        "title": "alexgisby.me",
        "type": "code",
        "dates": { "end": 2017 },
        "description": "A ReactJS based portfolio site, and a chance for me to sink my teeth into AWS Lambda and universal Javascript applications.",
        "external_links": [{
            "title": "How I built alexgisby.me",
            "url": "https://github.com/alexgisby/alexgisby.me/blob/master/README.md"
        }],
        "tags": ["personal", "javascript", "html", "css-sass", "reactjs", "express", "amazon-web-services"]
    }, {
        "title": "Web Developer - Wallpaper.com (Time Inc)",
        "type": "work",
        "dates": { "start": 2011, "end": 2012 },
        "description": "Developer for Wallpaper.com, an international website handling around 5.5 million page views a month. Based on Zend Framework, CodeIgniter and Akamai, with a MySQL database backend. Also created Wallpaper.cn a Chinese variant of the site requiring substantial refactoring to support multi-language content from CMS through to frontend.",
        "external_links": [{
            "title": "Read more on my LinkedIn profile",
            "url": "https://www.linkedin.com/in/alexgisby/"
        }],
        "tags": ["work", "php", "javascript", "html", "css-sass", "zend-framework", "mysql-postgres", "high-scale", "akamai-cloudfront", "behaviour-driven-development"]
    }, {
        "title": "PHP MVC Developer - v4 Technical",
        "type": "work",
        "dates": { "start": 2009, "end": 2011 },
        "description": "Building everything from e-commerce platforms to internal communication tools, usually in Kohana, with MySQL backends.",
        "external_links": [{
            "title": "Read more on my LinkedIn profile",
            "url": "https://www.linkedin.com/in/alexgisby/"
        }],
        "tags": ["work", "php", "javascript", "html", "css-sass", "mysql-postgres"]
    }, {
        "title": "PHP at the BBC - develop: BBC Conference",
        "type": "speaking",
        "dates": { "end": 2016 },
        "description": "An internally focused talk to advertise and promote the work myself and my team had done around working with PHP on AWS including the build tools, RPM repos and libraries for internal services we had created.",
        "external_links": [{
            "title": "develop:BBC website",
            "url": "http://www.bbc.co.uk/academy/technology/Develop-BBC-2016"
        }],
        "tags": ["talks", "speaking", "php", "amazon-web-services"]
    }, {
        "title": "Building Next-gen Webapps at the BBC - FrontEnd Suffolk Talk",
        "type": "speaking",
        "dates": { "end": 2015 },
        "description": "A talk to the local web dev usergroup in my hometown about our work defining the new platform for building our web applications within the iPlayer Radio team at the BBC.",
        "external_links": [{
            "title": "FESuffolk Talk Page",
            "url": "http://www.fesuffolk.co.uk/talks/58"
        }],
        "tags": ["talks", "speaking"]
    }, {
        "title": "imgur-album-downloader",
        "type": "code",
        "dates": { "start": 2012, "end": 2017 },
        "description": "A little utility that quickly got out of hand, this was my first open-source Python project that has grown to a modest popularity. A cheeky way of grabbing the images from an Imgur album without going via the API. Really popular with certain Subreddit users, not sure why...",
        "external_links": [{
            "title": "imgur-album-downloader on GitHub",
            "url": "https://github.com/alexgisby/imgur-album-downloader"
        }],
        "tags": ["personal", "python", "open-source"]
    }, {
        "title": "Personal Projects",
        "type": "personal",
        "dates": { "start": 2006, "end": 2017 },
        "description": "In my free time, I've experimented with creating board games in Javascript, equipment booking systems, RESTful calendar APIs, game dev with Unity and SDL and more besides that I couldn't hope to list here. If you're interested in what else I can or want to do, why not get in touch?",
        "external_links": [],
        "tags": ["personal", "php", "silex", "javascript", "ruby", "html", "css-sass", "service-oriented-architecture-rest", "open-source"]
    }, {
        "title": "Scala Training",
        "type": "training",
        "dates": { "end": 2016 },
        "description": "A three day course taking a look into the Scala programming language, also covering functional programming.",
        "external_links": [],
        "tags": ["training", "scala"]
    }, {
        "title": "Architecting on AWS Training",
        "type": "training",
        "dates": { "end": 2015 },
        "description": "The official three day Architecting on AWS training in preparation for the Solution Architect - Associate exam.",
        "external_links": [{
            "title": "Architecting on AWS Course",
            "url": "https://aws.amazon.com/training/course-descriptions/architect/"
        }],
        "tags": ["training", "amazon-web-services"]
    }, {
        "title": "Ruby & Cucumber Training",
        "type": "training",
        "dates": { "end": 2014 },
        "description": "A three day course around writing feature files, the ruby programming language and automating testing in a BDD way.",
        "external_links": [],
        "tags": ["training", "ruby", "behaviour-driven-development"]
    }, {
        "title": "Medium Writings",
        "type": "writing",
        "dates": { "end": 2017 },
        "description": "Writing on Medium, articles mostly on the softer side of development - process and techniques mostly.",
        "external_links": [{
            "title": "@alexgisby on Medium",
            "url": "https://medium.com/@alexgisby"
        }],
        "tags": ["personal", "writing"]
    }]
};

exports.default = data;