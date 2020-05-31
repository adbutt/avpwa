<?php
$project_title = get_field('single_project_title');
$project_subtitle = get_field('single_project_sub-title');
$project_intro = get_field('single_project_intro');
$project_link = get_field('single_project_link');
$project_link_text = get_field('single_project_link_text');
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
<div class="project-banner">
	<div class="project-branding" data-background="<?=$bgimage;?>">
		<div class="project-wrap">
			<div class="grid-container">
				<div class="project-details">
					<?php if( $project_subtitle) { ?>
						<div class="project-sub"><?=$project_subtitle;?></div>
					<?php } ?>
					<?php if( $project_title) { ?>
						<h1 class="project-title"><?=$project_title;?></h1>
					<?php } ?>
					<?php if( $project_intro) { ?>
						<div class="project-copy"><?=$project_intro;?></div>
					<?php } ?>

				</div>
			</div>
		</div>
	</div>
</div>
