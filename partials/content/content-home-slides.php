<?php

// check if the repeater field has rows of data
if (have_rows('slides')) :
	echo '<div class="hero-slides">';
	echo '<div class="slick-slider  grid-container">';
	// loop through the rows of data
	while (have_rows('slides')) : the_row();
		$title = get_sub_field('title');
		$content = get_sub_field('content');
		$image = get_sub_field('image');
		echo '<div class="slick-slide">';
		// display a sub field value
		echo '<div class="slide-wrap">';
		echo '<div class="slide-content">';
		echo '<h2>' . $title . '</h2>';
		echo '<span>' . $content . '</span>';
		echo '</div>';
		echo '<div class="slide-image" style="background-image: url(' . $image . ')">&nbsp;';
		echo '</div>';
		echo '</div>';
		echo '</div>';


	endwhile;
	echo '</div>';
	echo '</div>';

else :

// no rows found

endif;
