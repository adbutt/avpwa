<?php
$page_title = get_field('page_title');
$intro = get_field('intro');

// Query Arguments
$args = array(
	'post_type' => array('work'),
	'post_status' => array('publish'),
	'posts_per_page' => 6,
	'nopaging' => true,
	'sort_column' => 'menu_order',
	// 'orderby' => 'menu_order',
	'order' => 'ASC',
);
// The Query
$work = new WP_Query( $args );

// The Loop
if ( $work->have_posts() ) { ?>

<div class="our-work">
    <div class="work-intro">
        <div class="section-title"><?=$page_title;?></div>
        <div class="section-intro"><?=$intro;?></div>
    </div>
    <div class="work-folio-wrapper">
        <?php
            $itemcount=1;
            $rowcount=1;
            echo '<div class="work-row"><div class="col-1">';
            while ( $work->have_posts() ) {
                $work->the_post();
                if($itemcount == 2 ) {
                    echo '</div><div class="col-2">';
                }
                if($itemcount % 4 == 0 ) {
                    echo '</div></div><div class="work-row row-alt"><div class="col-1">';
                    $rowcount++;
                    $itemcount=1;
                }
                if ( has_post_thumbnail() ) {
                    $bgimage = get_the_post_thumbnail_url();
                }
                else {
                    $bgimage = get_bloginfo( 'stylesheet_directory' )
                        . '/assets/images/default-image.jpg';
				}
				$pcl = get_field('project_client_logo');
				$pa = get_field('project_achievement');
                ?>
                    <div class="folio-item folio-<?=$itemcount;?>" data-background="<?=$bgimage;?>">
                        <a href="<?php the_permalink();?>" class="project-link">
						<?php if ($pcl || $pa) {?>
							<div class="result">
								<div class="result-details">
								<?php if($pcl) { ?>
										<img src="<?=$pcl;?>"/>
									<?php }
									?>
									<?php if($pa) { ?>
										<p><?=$pa;?></p>
									<?php }
									?>
								</div>
							</div>
						<?php } ?>
							<div class="project-mask"></div>
                        </a>
                    </div>

                <?php $itemcount++;
            }
        echo '</div>';?>
    </div>
</div>
<?php }  else {
    echo "No Projects Found";
}
/* Restore original Post Data */
wp_reset_postdata();?>
