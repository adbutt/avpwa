<?php
// check if the repeater field has rows of data
if (have_rows('testimonial')) :
	echo '<div class="testimonials-wrapper">';
	echo '<h2>Previous Participants</h2>';
	echo '<div class="testimonials">';
	// loop through the rows of data
	while (have_rows('testimonial')) : the_row();
		$copy = get_sub_field('quote');
		echo '<div class="testimonial">';
		// display a sub field value
		echo '<div class="testimonial-content">';
		echo '<p>' . $copy . '</p>';
		echo '</div>';
		echo '</div>';
	endwhile;
	echo '</div>';
	echo '</div>';

else :

// no rows found

endif;
