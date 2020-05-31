<?php
$service_title = get_field('single_service_title');
$service_subtitle = get_field('single_service_sub-title');
$service_intro = get_field('single_service_intro');
$service_link = get_field('single_service_link');
$service_link_text = get_field('single_service_link_text');
$cta_link = get_field('contact_page_url','option');
?>
<?php if ( has_post_thumbnail() ) {
		$bgimage = get_the_post_thumbnail_url();
	}
	else {
		$bgimage = get_bloginfo( 'stylesheet_directory' )
			. '/assets/images/default-image.jpg';
	}
?>
<div class="grid-container">
	<div class="service-banner">
		<div class="service-details">
			<?php if( $service_title) { ?>
				<h1 class="service-title"><?=$service_title;?></h1>
			<?php } ?>
			<?php if( $service_subtitle) { ?>
				<div class="service-sub"><?=$service_subtitle;?></div>
			<?php } ?>
			<?php if( $service_intro) { ?>
				<div class="service-copy"><?=$service_intro;?></div>
			<?php } ?>
			<?php if( $cta_link) { ?>
				<div class="service-link">
					<a href="<?=$cta_link;?>" class="button in-touch">Get in touch</a>
				</div>
			<?php } ?>
		</div>
		<div class="service-branding" data-background="<?=$bgimage;?>">
			&nbsp;
		</div>
	</div>
</div>
