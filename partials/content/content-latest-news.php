<?php
// Query Arguments
$args = array(
	'post_status' => array('publish'),
	'posts_per_page' => 3,
	'nopaging' => true,
	'order' => 'DESC',
	// 'orderby' => 'menu_order',
);

// The Query
$news = new WP_Query( $args );

// The Loop
if ( $news->have_posts() ) { ?>
<div class="latest-news-wrapper">
	<div class="section-titles grid-container">
    	<div class="section-title grid-50">Latest News.</div>
			<div class="section-link grid-50">
                <!-- <a href="//localhost:3307/our-work/" class="arrow-move">See all news</a> -->
            </div>
		</div>
	</div>
	<div class="grid-container">
		<div class="card-wrapper">
		<?php while ( $news->have_posts() ) {
            $news->the_post(); ?>
			<div class="news-card">
				<a href="<?php the_permalink();?>">
					<?php if ( has_post_thumbnail() ) {
						$bgimage = get_the_post_thumbnail_url(); ?>
						<div class="news-card--image" data-background="<?=$bgimage;?>">
							<div class="news-card--link-icon" aria-hidden="true">
								<svg class="icon" viewBox="0 0 32 32"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" stroke-miterlimit="10"><path d="M21,5s-4.333-1.667-7,1L6,14c-2.667,2.667-1,7-1,7"></path><path d="M27,11s1.667,4.333-1,7l-8,8c-2.667,2.667-7,1-7,1"></path> <line x1="12" y1="20" x2="4" y2="28"></line><line x1="28" y1="4" x2="20" y2="12"></line></g></svg>
							</div>
						</div>
					<?php } ?>
					<div class="news-card--content">
						<h4><?php the_title();?></h4>
						<?php the_excerpt(); ?>
					</div>
				</a>
			</div>
		<?php
		}
		wp_reset_postdata();
		?>
		</div>
	</div>
</div>
	<?php } ?>
