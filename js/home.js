document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const postText = post.querySelector('.post-text');
        const seeMoreButton = post.querySelector('.see-more-button');

        if (postText.scrollHeight > postText.clientHeight) {
            postText.classList.add('collapsed');
            seeMoreButton.style.display = 'block';

            seeMoreButton.addEventListener('click', () => {
                if (postText.classList.contains('collapsed')) {
                    postText.classList.remove('collapsed');
                    postText.classList.add('expanded');
                    seeMoreButton.textContent = 'See Less';
                } else {
                    postText.classList.remove('expanded');
                    postText.classList.add('collapsed');
                    seeMoreButton.textContent = 'See More';
                }
            });
        }
    });
});
