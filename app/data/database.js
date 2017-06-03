"use strict";

const data =
{
    "tags": [
        {
            "name": "PHP",
            "url": "php",
            "type": "languages",
            "description": "I've been working with PHP for nearly fifteen years and have built everything from high scale enterprise applications through to small, focused open source libraries. I've even memorized the haystack needle order of all the core methods. Probably."
        },
        {
            "name": "Python",
            "url": "python",
            "type": "languages",
            "description": "I've worked with Python mostly to create command line and build tools such as RPM specfile generators and slightly risque website scrapers."
        },
        {
            "name": "Ruby",
            "url": "ruby",
            "type": "languages",
            "description": "I use Ruby and Cucumber for all my automated testing needs, hooking into Capybara and PhantomJS for headless testing, along with SitePrism to keep things tidy."
        },
        {
            "name": "Javascript",
            "url": "javascript",
            "type": "languages",
            "description": "Starting in the Prototype.js days, my first forays into Open Source were small Javascript libs. Since then I've written complex frontends using Google Maps and jQuery and have begun building things in ReactJS + Express, like this site right here!"
        },
        {
            "name": "HTML",
            "url": "html",
            "type": "languages",
            "description": "Hopefully goes without saying for a Web Dev, but I know HTML. I even know HTML5. Sometimes I dream about HTML6."
        },
        {
            "name": "CSS & SASS",
            "url": "css-sass",
            "type": "languages",
            "description": "I actually started my career doing table based layouts. I now use SASS for everything. I know which I prefer."
        },
        {
            "name": "MySQL & Postgres",
            "url": "mysql-postgres",
            "type": "languages",
            "description": "I sling SQL like it's going out of fashion. Oh, it is? Nah, SQL will never die. I understand indexes and third normal form, and I usually know when to ignore them too."
        },

        {
            "name": "Silex",
            "url": "silex",
            "type": "frameworks",
            "description": "My weapon of choice, I love this framework. All my personal projects and several of my work ones are in Silex."
        },
        {
            "name": "Symfony",
            "url": "symfony",
            "type": "frameworks",
            "description": "Mostly prototyping and personal projects, I tend to prefer a slimmer, more tailored experience. But naturally, for a PHP dev, I'm comfortable with Symfony and it's components."
        },
        {
            "name": "Laravel",
            "url": "laravel",
            "type": "frameworks"
        },
        {
            "name": "ReactJS",
            "url": "reactjs",
            "type": "frameworks",
            "description": "I'm relatively new to the world of ReactJS, but I'm in love. I've been wanting a framework like this for a long time - a proper view layer for the web. This site here is built in React."
        },
        {
            "name": "Express",
            "url": "express",
            "type": "frameworks",
            "description": "Silex's Javascripty brother, I love them both very much. This site is written in Universal Javascript using Express as it's backend."
        },

        {
            "name": "Amazon Web Services",
            "url": "amazon-web-services",
            "type": "devops",
            "description": "I am in the cloud. I've designed and architected services on AWS that handle millions of requests per day on very tight budgets, have undertaken the Architecting on AWS training course from Amazon and am studying for my Solutions Architect certification."
        },
        {
            "name": "Service Oriented Architecture & REST",
            "url": "service-oriented-architecture-rest",
            "type": "devops",
            "description": "Both as a user and as an API designer, I love SOA. I've designed envelope formats for component renderers, written multiple RESTful APIs and written clients for consuming them."
        },
        {
            "name": "High Scale",
            "url": "high-scale",
            "type": "devops",
            "description": "An app is no good if no-one can see it. Scaling is at the heart of everything I do, from ensuring code is fast and light, to designing cost-effective infrastructure to handle millions of requests per day."
        },
        {
            "name": "nginx",
            "url": "nginx",
            "type": "devops",
            "description": "I have a great affection for nginx, mostly garnered through fighting with Apache for so long. I've configured it with self-signed certificates, automated generation of nginx conf files and conducted load test experiments to prove I was right to choose it for high performance applications."
        },
        {
            "name": "Redis & Memcached",
            "url": "redis-memcached",
            "type": "devops",
            "description": "Used 'em both, and prefer Redis. Have configured Redis through CloudFormation and debugged more Memcached problems than my brain will allow me to remember."
        },
        {
            "name": "Akamai & CloudFront",
            "url": "akamai-cloudfront",
            "type": "devops",
            "description": "I've wired up both Akamai and CloudFront to origin webservers, and come up with sensible cache policies to offload intelligently to them."
        },

        {
            "name": "Team Leadership",
            "url": "team-leadership",
            "type": "practices",
            "description": "I've been a tech lead for over three years and love it. Building amazing teams and growing the skills and confidence of my team members is what makes me tick, and there's not a lot I wouldn't do for my teammates."
        },
        {
            "name": "Test Driven Development",
            "url": "test-driven-development",
            "type": "practices",
            "description": "Everything I do is TDD. From Open Source libs to internal applications, if there's no unit tests, it's not done. I've unit tested in both PHP and Javascript, so you know I'm serious."
        },
        {
            "name": "Behaviour Driven Development",
            "url": "behaviour-driven-development",
            "type": "practices",
            "description": "I like Gherkin so much I write feature files for my tiny toy projects. I've also undertaken professional training, have participated in countless three-amigos sessions and write cuke tests on the daily."
        },
        {
            "name": "Open Source",
            "url": "open-source",
            "type": "practices",
            "description": "My entire career is built off the back of Open Source. Wouldn't be fair not to give back? I love writing libraries and mini projects, and especially love it when others get involved. Open source gave me a career, I intend to repay the favour."
        },
        {
            "name": "Writing",
            "url": "writing",
            "type": "practices",
            "description": "I love teaching and mentoring, and the easiest way to do that is to write! I'm a right weirdo and actually enjoy writing documentation, both in-code and in formal docs. I totally understand if this colours your opinion of me."
        },
        {
            "name": "Speaking",
            "url": "speaking",
            "type": "practices",
            "description": "I was a drama GCSE kid, so I rather like being on stage and performing. Especially when I get to talk about things that really matter to me. Like code. Or mountain bikes. Or why Tangled is probably the best Disney movie ever made."
        }
    ]
};

export default data;
