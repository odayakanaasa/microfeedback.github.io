webpackJsonp([0xea19c3781df8],{368:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Guides for deploying to different hosting providers.</p>\n<ul>\n<li><a href="#now">Now</a></li>\n<li><a href="#heroku">Heroku</a></li>\n</ul>\n<h2 id="now"><a href="#now" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Now</h2>\n<p>Zeit’s <a href="https://zeit.co/now">Now</a> is an excellent option for hosting MicroFeedback backends.\nNow provides a command-line interface for deploying Node.js\nmicroservices quickly and easily.</p>\n<p>Install the now CLI:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>npm i -g now</code></pre>\n      </div>\n<p>To deploy a MicroFeedback backend using the now CLI, pass the\nGitHub repo for backend.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>now microfeedback/microfeedback-github</code></pre>\n      </div>\n<p>You will be prompted to enter the required environment variables to\nconfigure your deployment. In the case of microfeedback-github, all you\nneed is a GitHub API token.</p>\n<h2 id="heroku"><a href="#heroku" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Heroku</h2>\n<p>Heroku is another option for quickly deploying your MicroFeedback\nbackend.</p>\n<h3 id="push-button-deploy"><a href="#push-button-deploy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Push button deploy</h3>\n<p>See the documentation pages for the <a href="/backends/">available backends</a> to find a <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku"> button for your backend of choice.</p>\n<h3 id="deployment-with-git"><a href="#deployment-with-git" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deployment with Git</h3>\n<p>To deploy with Git you will need to:</p>\n<ul>\n<li>Clone the repo for your backend</li>\n<li>Create and configure a new Heroku app using the heroku CLI</li>\n<li>Push your backend application to the heroku remote</li>\n</ul>\n<p>See <a href="https://devcenter.heroku.com/articles/heroku-cli">this page</a> for\ninstallation instructions for the Heroku CLI.</p>\n<p>Then run the following commands:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>git clone https://github.com/microfeedback/microfeedback-github.git\ncd microfeedback-github\nheroku create\nheroku config:set GH_TOKEN=your-bots-github-token\ngit push heroku master</code></pre>\n      </div>\n<h2 id="next-steps"><a href="#next-steps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Next steps</h2>\n<ul>\n<li>See the <a href="/backends/">Backends</a> page for a list of officially-supported backends.</li>\n<li>If you already have a backend deployed, add a feedback button to your\nwebsite using <a href="/ui-components/microfeedback-button/">microfeedback-button</a>.</li>\n</ul>',frontmatter:{title:"Deployment"},fields:{path:"getting-started/deployment.md",slug:"/getting-started/deployment/",dir:"getting-started"}}},pathContext:{slug:"/getting-started/deployment/"}}}});
//# sourceMappingURL=path---getting-started-deployment-fa81c03170465e716afc.js.map