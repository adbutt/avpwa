<?php
$service_heading = get_field('service_heading');
$link_page = get_field('link_page');
$link_page_title = get_field('link_page_title');

// Query Arguments
$args = array(
	'post_type' => array('service'),
	'post_status' => array('publish'),
	'posts_per_page' => 8,
	'nopaging' => true,
	'order' => 'ASC',
	'orderby' => 'menu_order',
);

// The Query
$services = new WP_Query( $args );

// The Loop
if ( $services->have_posts() ) {?>
<div class="our-services">
    <div class="section-titles grid-container">
        <div class="section-title grid-50">
            <span class="">Services.</span>
            <h2 class="section-callout"><?=$service_heading;?></h3>
        </div>
        <div class="section-link grid-50"><a href="<?=$link_page;?>" class="arrow-move"><?=$link_page_title;?></a></div>
    </div>
    <div class="services-wrapper grid-container">
        <div class="service-wrap">
            <?php
                while ( $services->have_posts() ) {
                $services->the_post();
                $service_icon = get_field('service_icon');
                $service_intro = get_field('service_intro');
                ?>
                    <div class="service cbox">
                        <div class="service-icon-wrapper">
                            <?php if( $service_icon ) { ?>
                               <img class="service-icon" src="<?php echo $service_icon['url']; ?>" alt="<?php the_title();?>"/>
                            <?php } else { ?>
                                <img class="service-icon" src="/wp-content/uploads/2019/08/seo-search-icon.png" alt="<?php the_title();?>"/>
                            <?php } ?>
                        </div>
                        <div class="service-intro-wrap">
                            <a href="<?php the_permalink();?>"><h4 class="service-title"><?php the_title();?></h4></a>
                            <?php if( $service_intro ) { ?>
                                <p class="service-intro"><?php echo $service_intro;?></p>
                            <?php } ?>
                        </div>
                    </div>
            <?php
            } ?>        
        </div>
    </div>
</div>
<?php } else {
    // no posts found
}

/* Restore original Post Data */
wp_reset_postdata();?>
