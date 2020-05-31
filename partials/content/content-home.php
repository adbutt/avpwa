<?php
//vars
$content = get_field('content_block');

if( $content ):?>
<div class="home-wrapper">
	<div class="grid-container">
		<div class="hc-left grid-60">
			<?php echo $content['left_content'];?>
		</div>
		<div class="hc-right grid-40">
			<div class="overlay"></div>
			<?php echo $content['right_content'];?>
		</div>
	</div>
</div>
<?php endif; ?>
