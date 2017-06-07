# alexgisby.me

This is the source code for my portfolio site, you can see it in action here:
[www.alexgisby.me](https://www.alexgisby.me)

## Contents

- [Tech Used](#tech-used)
- [Project Structure](#project-structure)
- [Deployment Architecture](#deployment-architecture)

## Tech Used

This is a universal (or isomorphic) Javascript site, using ExpressJS on the serverside and
ReactJS on the frontend for a seamless, fast experience. It's written in ES6 using Babel to
transpile both server-side and client-side code.

The frontend is based on the Materialize CSS framework, with a tiny sprinkling of inline CSS
to round it off.

## Project Structure

The `app/` directory contains, you guessed it, the app code including all the components, views and
server side code.

The Components are structured in a roughly a [Pattern Lab](http://patternlab.io/) style, using
the idea of Atoms, Molecules, Organisms, Sections and Pages to structure a hierarchy of reuse:

- **Atoms**: CSS classes to modify a block of HTML in a standard way (changing text colour for instance.)
- **Molecules**: Small, standalone blocks that are agnostic as to where they are used.
- **Organisms**: More complex components, usually combining multiple Molecules to make the finished item.
- **Sections**: Common blocks on the page.
- **Pages**: Made up of all of the above, composited together into the final response.

## Deployment Architecture

The project is deployed to AWS Lambda, and makes use of an AWS Web Application Firewall to trigger
execution of the Lambda, all behind a CloudFront distribution and Route 53 hosted zone to control the DNS.

The static assets are served from an S3 bucket, again with a CloudFront distribution in front of them,
using Origin Access Control to limit access to just CloudFront, and a Route 53 record set to prettify the
URL for the user.

The site is available on HTTP or HTTPS thanks to using the AWS Certificate Manager.
