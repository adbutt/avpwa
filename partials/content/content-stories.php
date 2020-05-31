<?php
// check if the repeater field has rows of data
if (have_rows('stories')) :
	echo '<div class="stories">';
	// loop through the rows of data
	while (have_rows('stories')) : the_row();
		$title = get_sub_field('title');
		$copy = get_sub_field('copy');
		$image = get_sub_field('image');
		$linkt = get_sub_field('link_text');
		$link = get_sub_field('link');
		$lightb = get_sub_field('lightbox');

		echo '<div class="story">';
		// display a sub field value
		echo '<div class="story-wrap">';
		echo '<div class="story-content">';
		echo '<div class="story-image">';
		echo '<img src="' . $image . '">';
		echo '</div>';
		echo '<h3>' . $title . '</h3>';
		echo '<p>' . $copy . '</p>';
		if (!$lightb) {
			echo '<a href="' . $link . '">' . $linkt . '</a>';
		} else {
			echo '<a href="' . $link . '" rel="wp-video-lightbox">' . $linkt . '</a>';
		}
		echo '</div>';
		echo '</div>';
		echo '</div>';


	endwhile;
	echo '</div>';

else :

// no rows found

endif;
