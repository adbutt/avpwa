<?php
// check if the repeater field has rows of data
if (have_rows('features')) :
	echo '<div class="features">';
	// loop through the rows of data
	while (have_rows('features')) : the_row();
		$title = get_sub_field('title');
		$copy = get_sub_field('copy');
		$image = get_sub_field('image');
		$linkt = get_sub_field('link_text');
		$link = get_sub_field('link');
		echo '<div class="feature">';
		// display a sub field value
		echo '<div class="feature-wrap">';
		echo '<div class="feature-content">';
		echo '<div class="feature-image">';
		echo '<img src="' . $image . '">';
		echo '</div>';
		echo '<h3>' . $title . '</h3>';
		echo '<p>' . $copy . '</p>';
		echo '<a href="' . $link . '">' . $linkt . '</a>';
		echo '</div>';
		echo '</div>';
		echo '</div>';


	endwhile;
	echo '</div>';

else :

// no rows found

endif;
