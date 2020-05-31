<?php
$land_title = get_field('land_main_title');
$land_subtitle = get_field('land_sub_title');
$land_asset = get_field('land_asset_image');
$land_cta = get_field('land_cta');
$land_form = get_field('land_lead_form');
$land_form_display = '[gravityform id="'.$land_form.'" title="false" description="false" ajax="true"]';

?>
<div class="landing-header">
	<div class="grid-container">
		<div class="invicta-brand"><img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/invicta-agency-white-logo.png" alt="invicta agency branding"></div>
		<div class="landing-intro">
			<h1><?=$land_title;?></h1>
			<h2><?=$land_subtitle;?></h2>
			<img class="land-asset-mobile" src="<?=$land_asset;?>" alt="invicta agency branding">
			<a href="#inline" class="button inline"><?=$land_cta;?></a>
		</div>
	</div>
	<img class="land-asset-desktop" src="<?=$land_asset;?>" alt="invicta agency branding">
	<div id="inline">
		<?php echo do_shortcode($land_form_display); ?>
	</div>
</div>
