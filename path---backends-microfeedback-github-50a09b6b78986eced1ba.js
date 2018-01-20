webpackJsonp([39286604669785],{363:function(e,i){e.exports={data:{markdownRemark:{html:'<p>The microfeedback-github backend collects user feedback to your GitHub\nrepo’s issue tracker.</p>\n<p>GitHub source: <a href="https://github.com/MicroFeedback/microfeedback-github">MicroFeedback/microfeedback-github</a></p>\n<h2 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h2>\n<h3 id="post-githubusergithubrepo"><a href="#post-githubusergithubrepo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>POST /&#x3C;githubUser>/&#x3C;githubRepo></code></h3>\n<p>Post a new feedback message on the issue tracker for the given GitHub\nrepo.</p>\n<p>A single instance may be used to post issues to multiple GitHub repos.</p>\n<p>The <strong>path</strong> includes:</p>\n<ul>\n<li><code>githubUser</code> (required): Github username or organization.</li>\n<li><code>githubRepo</code> (required): Repo name.</li>\n</ul>\n<p>The JSON <strong>payload</strong> contains the following keys:</p>\n<ul>\n<li><code>body</code> (required): The feedback content.</li>\n<li><code>screenshotURL</code>: Optional URL to a screenshot image.</li>\n<li><code>extra</code>: Optional object containing optional information to include in the issue.</li>\n</ul>\n<h2 id="deploy-using-zeit-now"><a href="#deploy-using-zeit-now" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deploy using ZEIT now</h2>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>now microfeedback/microfeedback-github</code></pre>\n      </div>\n<h2 id="full-documentation"><a href="#full-documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Full documentation</h2>\n<p>See the project’s <a href="https://github.com/MicroFeedback/microfeedback-github">README</a> for full API documentation.</p>',frontmatter:{title:"microfeedback-github"},fields:{path:"backends/microfeedback-github.md",slug:"/backends/microfeedback-github/",dir:"backends"}}},pathContext:{slug:"/backends/microfeedback-github/"}}}});
//# sourceMappingURL=path---backends-microfeedback-github-50a09b6b78986eced1ba.js.map