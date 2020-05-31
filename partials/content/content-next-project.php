<?php
$next_post = get_adjacent_post(false, '', false);
if(!empty($next_post)) {
	$nplink = get_permalink($next_post->ID);
	$npimage = get_the_post_thumbnail_url($next_post->ID);

	?>
	<section class="next-up">
		<div class="grid-container">
			<div class="next-up-wrapper">
				<div class="next-up-copy">
					<h6>NEXT CASE STUDY</h6>
					<?php echo '<h3>'.$next_post->post_title . '</h3>';?>
					<a href="<?=$nplink;?>" class="button">Find out more</a>
				</div>
				<?php if($npimage) { ?>
					<div class="next-up-image" data-background="<?=$npimage;?>"></div>
					<?php } ?>

			</div>
		</div>
	</section>
<?php } else {
	$first = new WP_Query('post_type="work"&post_status="publish"&sort_column="menu_order"&order="DESC"&posts_per_page=1'); $first->the_post();
	$nptitle = get_the_title();
	$nplink = get_permalink();
	$npimage = get_the_post_thumbnail_url();?>
	<section class="next-up">
		<div class="grid-container">
			<div class="next-up-wrapper">
				<div class="next-up-copy">
					<h6>NEXT CASE STUDY</h6>
					<?php echo '<h3>'.$nptitle . '</h3>';?>
					<a href="<?=$nplink;?>" class="button">Find out more</a>
				</div>
				<?php if($npimage) { ?>
					<div class="next-up-image" data-background="<?=$npimage;?>"></div>
					<?php } ?>
			</div>
		</div>
	</section>

<?php
wp_reset_query();
} ?>
