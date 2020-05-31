<?php
$latest_title = get_field('section_title');
$latest_linkpage = get_field('projects_link');
$latest_linkpage_title = get_field('projects_link_title');
$latest_primary_image = get_field('main_feature');
$latest_primary_logo = get_field('main_feature_logo');
$latest_primary_copy = get_field('main_feature_copy');
$latest_primary_link = get_field('main_feature_link');
$latest_secondary_image = get_field('feature_1');
$latest_secondary_logo = get_field('feature1_logo');
$latest_secondary_copy = get_field('feature1_copy');
$latest_secondary_link = get_field('feature1_link');
$latest_third_image = get_field('feature_2');
$latest_third_logo = get_field('feature2_logo');
$latest_third_copy = get_field('feature2_copy');
$latest_third_link = get_field('feature2_link');
?>

<div class="latest-work">
		<div class="section-titles grid-container">
            <div class="section-title grid-50"><?php if( $latest_title ) { ?><?=$latest_title;?><?php } ?></div>
			<div class="section-link grid-50">
            <?php if($latest_linkpage) { ?>
                <a href="<?=$latest_linkpage;?>" class="arrow-move">
                    <?php if( $latest_linkpage_title ) {
                        echo $latest_linkpage_title;
                    } else {
                        echo 'View all projects';
                    } ?>
                </a>
            <?php } ?>
            </div>
		</div>
		<div class="folio-wrapper">
        <?php if( $latest_primary_image ) { ?>
            <div class="col1">
                <div class="main-mainimage" data-background="<?php echo $latest_primary_image['url']; ?>">
                    <a href="<?php echo $latest_primary_link;?>" class="project-link">
						<div class="main-result">
							<div class="main-result-details">
								<?php if($latest_primary_logo) { ?>
									<img src="<?=$latest_primary_logo;?>"/>
								<?php }
								?>
								<?php if($latest_primary_copy) { ?>
									<p><?=$latest_primary_copy;?></p>
								<?php }
								?>
							</div>
						</div>
                        <div class="project-mask"></div>
                    </a>
                </div>
            </div>
        <?php } ?>
			<div class="col2">
                <?php if( $latest_secondary_image ) { ?>
                    <div class="main-folio" data-background="<?php echo $latest_secondary_image['url']; ?>">
						<a href="<?php echo $latest_secondary_link;?>" class="project-link">
							<div class="result">
								<div class="result-details">
									<?php if($latest_secondary_logo) { ?>
										<img src="<?=$latest_secondary_logo;?>"/>
									<?php }
									?>
									<?php if($latest_secondary_copy) { ?>
										<p><?=$latest_secondary_copy;?></p>
									<?php }
									?>
								</div>
							</div>
                            <div class="project-mask"></div>
                        </a>
                    </div>
                <?php } ?>
                <?php if( $latest_third_image ) { ?>
                    <div class="main-folio folio-2" data-background="<?php echo $latest_third_image['url']; ?>">
						<a href="<?php echo $latest_third_link;?>" class="project-link">
							<div class="result">
								<div class="result-details">
									<?php if($latest_third_logo) { ?>
											<img src="<?=$latest_third_logo;?>"/>
										<?php }
										?>
										<?php if($latest_third_copy) { ?>
											<p><?=$latest_third_copy;?></p>
										<?php }
										?>
								</div>
							</div>
                            <div class="project-mask"></div>
                        </a>
                    </div>
                <?php } ?>
			</div>
		</div>
    </div>

