/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	document.querySelector('button').addEventListener('click', async () => {
		const posts = await window.lib.getPosts();

		posts.forEach(async (post) => {
			const comments = await window.lib.getComments(post.id);
			post.comments = comments;
		});

		console.log(posts);
	});
})();
