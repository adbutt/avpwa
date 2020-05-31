<?php

/**
 * Template Name: Search Page Template
 * Template Post Type: post, page
 *
 * @package WordPress
 */
if (!is_user_logged_in()) {
	wp_redirect(home_url('/file-manager/'));
}
get_header();
?>

<div class="wrap">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div id="wp-vue-app">
			</div><!-- #vue-app -->
		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .wrap -->

<?php
get_footer();
