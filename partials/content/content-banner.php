<?php if ( has_post_thumbnail() ) {
		$bgimage = get_the_post_thumbnail_url();
	}
	else {
		$bgimage = get_bloginfo( 'stylesheet_directory' )
			. '/assets/images/default-image.jpg';
	}
?>
<div class="page-banner" data-background="<?=$bgimage;?>">
	<div class="grid-container">
	<?php the_title('<h1>','</h1>');?>
	</div>
</div>
<div class="breadcrumb-wrapper">
<div class="breadcrumbs grid-container" typeof="BreadcrumbList" vocab="https://schema.org/">
    <?php
    if(function_exists('bcn_display'))
    {
            bcn_display();
    }?>
</div>
</div>
