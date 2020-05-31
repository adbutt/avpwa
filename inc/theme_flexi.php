<?php
/**
 * Custom functions that display Flexbile Content Layouts.
 *
 * @package wpgst
 */


//function to display Image / Content from the ACF flexi-content fields
function display_flexi_media_content() {
  $mci = get_sub_field('image');
  $mcc = get_sub_field('content');
  $mcip = get_sub_field('image_position');
  $mcst = get_sub_field('styling');
    echo '<section class="flexi-media-content section '.$mcst.' unstyled-'.$mcip.'">';
      echo '<div class="media-content-wrapper">';
          if($mcip=='right') {
            echo '<div class="grid-container flexit">';
            echo '<div class="flex-mc-content">'.$mcc.'</div>';
            echo '<div class="flex-mc-image"><img class="lazy" data-src="'.$mci.'"/>';
            echo '</div>';
          } else {
            echo '<div class="grid-container flexit">';
              echo '<div class="flex-mc-image"><img class="lazy" data-src="'.$mci.'"/>';
              echo '</div>';
            echo '<div class="flex-mc-content">'.$mcc.'</div>';
          }
          echo '</div>';
      echo '</div>';
    echo '</section>';
}

//function to display Case Study Highlights from the ACF flexi-content fields
function display_flexi_casestudy() {
  $mci = get_sub_field('case_study_image');
  $mcc = get_sub_field('case_study_title');
  $mcip = get_sub_field('image_position');
  $mcil = get_sub_field('case_study_link');
    echo '<section class="flexi-casestudy section unstyled-'.$mcip.'">';
      echo '<div class="casestudy-content-wrapper">';
          if($mcip=='right') {
            echo '<div class="grid-container flexit">';
            if ($mcil){
              echo '<div class="flex-mc-content"><div class="h4">Case Study.</div><h3>'.$mcc.'</h3>';
              echo '<a href="'.$mcil.'" class="button clear-button">View Case Study</a></div>';
              echo '<div class="flex-mc-image"><a href="'.$mcil.'"><img class="lazy" data-src="'.$mci.'"/></a>';
              echo '</div>';
            } else {
              echo '<div class="flex-mc-content"><div class="h4">Case Study.</div><h3>'.$mcc.'</h3></div>';
              echo '<div class="grid-60 has-text-centered"><div class="flex-mc-image"><img class="lazy" data-src="'.$mci.'"/>';
              echo '</div>';
            }
          } else {
            echo '<div class="grid-container flexit">';
            if ($mcil){
              echo '<div class="flex-mc-image"><a href="'.$mcil.'"><img class="lazy" data-src="'.$mci.'"/></a>';
              echo '</div>';
            } else {
              echo '<div class="flex-mc-image"><img class="lazy" data-src="'.$mci.'"/>';
              echo '</div>';
            }
            echo '<div class="flex-mc-content"><div class="h4">Case Study.</div><h3>'.$mcc.'</h3>';
            echo '<a href="'.$mcil.'" class="button clear-button">View Case Study</a></div>';
          }
          echo '</div>';
      echo '</div>';
    echo '</section>';
}

//function to display Image / Content Panel from the ACF flexi-content fields
function display_flexi_intro_panel() {
  $ipi = get_sub_field('image');
  $ipip = get_sub_field('image_position');
  $ipc = get_sub_field('content');
  $ippt = get_sub_field('pre-title');
  $ipt = get_sub_field('title');
  $iptc = get_sub_field('title_colour');
  $ipb = get_sub_field('background_colour');
  $ipb = get_sub_field('background_colour');
  $ipcc = get_sub_field('content_colour');

    echo '<section class="flexi-intro-panel">';
      echo '<div class="intro-panel-content-wrapper">';
        if($ipip=='right') {
          echo '<div class="columns column-switch">';
          echo '<div class="column bg-'.$ipb.'"><div class="content-wrapper content contrast-'.$ipcc.'">';
            if (!empty($ippt)){
              echo '<span class="pre-title txt-'.$iptc.'">'.$ippt.'</span>';
            }
            echo '<h2 class="txt-'.$iptc.'">'.$ipt.'</h2><p>'.$ipc.'</p>';
            echo '</div></div>';
            echo '<div class="column panel-image lazy" data-src="'.$ipi.'">&nbsp;</div>';
            echo '</div>';
        } else {
          echo '<div class="columns">';
          echo '<div class="column panel-image lazy" data-src="'.$ipi.'">&nbsp;</div>';
          echo '<div class="column bg-'.$ipb.'"><div class="content-wrapper content contrast-'.$ipcc.'">';
            if (!empty($ippt)){
              echo '<span class="pre-title txt-'.$iptc.'">'.$ippt.'</span>';
            }
            echo '<h2 class="txt-'.$iptc.'">'.$ipt.'</h2><p>'.$ipc.'</p>';
            echo '</div></div>';
            echo '</div>';
        }
      echo '</div>';
    echo '</section>';
}

//function to display Title / Content from the ACF flexi-content fields
function display_flexi_title_content() {
  $st = get_sub_field('section_title');
  $tt = get_sub_field('title');
  $tc = get_sub_field('content');
  $ttp = get_sub_field('title_position');
  $tcc = get_sub_field('layout_options');
    echo '<section class="flexi-title-content section '.$tcc.' ftc-'.$ttp.'">';
      echo '<div class="title-content-wrapper">';
        echo '<div class="grid-container">';
          if($st) {
            echo '<h4 class="title-content">'.$st.'</h4>';
          }
          if($ttp=='right') {
						echo '<div class="flexit">';
            echo '<div class="t-copy">'.$tc.'</div>';
            echo '<div class="t-title">'.$tt.'</div>';
						echo '</div>';
					} else {
						echo '<div class="flexit">';
            echo '<div class="t-title">'.$tt.'</div>';
            echo '<div class="t-copy">'.$tc.'</div>';
						echo '</div>';
					}
          echo '</div>';
      echo '</div>';
    echo '</section>';
}

//function to display selected post list
function display_flexi_post_list() {
  $pl = get_sub_field('post_list_select');
  echo do_shortcode('['.$pl.']');
}

//function to display newsletter form
function display_flexi_newsletter() {
  $nid = get_sub_field('form_id');
  $nmh = get_sub_field('main_header');
  $nti = get_sub_field('tagline_intro');
  echo '<section class="flexi-newsletter">';
  echo '<div class="container">';
  echo '<div class="newsletter-intro">';
  echo '<span class="newsletter-head">'.$nmh.'</span>';
  echo '<span class="newsletter-intro">'.$nti.'</span>';
  echo '<div class="validation-message"></div>';
  echo '</div>';
  echo do_shortcode('[gravityform id="'.$nid.'" title="false" description="false"]');
  echo '</div>';
  echo '</section>';
}


//function to display a gallery from the ACF flexi-content fields
function display_flexi_gallery() {
    $rows = get_sub_field('gallery_images');
    if( $rows):
      echo '<section class="study-gallery">';
      echo '<div class="slick-slider">';
      // loop through the rows of data
        foreach ($rows as $row) : ?>
        <div class="slick-slide" style="background-image: url('<?php echo $row['url'];?>')"></div>
        <?php
        endforeach;
      echo '</div>';
      echo '</section>';

    endif;
}

//function to display a Icon Features from the ACF flexi-content fields
function display_flexi_features() {
	$rows = get_sub_field('features');
  if($rows):?>
		<section class="process-wrapper">
			<?php $ftitle = get_sub_field('features_title');
			if($ftitle) {?>
			<div class="ptitle-hold">
				<h3><?=$ftitle;?></h3>
			</div>
			<?php } ?>
			<?php $stitle = get_sub_field('features_sub-title');
			if($stitle) {?>
			<div class="stitle-hold">
				<p><?=$stitle;?></p>
			</div>
			<?php } ?>
			<div class="grid-container">
				<div class="process-container">
					<?php while( have_rows('features') ):the_row(); // loop through the rows of data
					// vars
					$pimage = get_sub_field('icon');
					$ptitle = get_sub_field('title');
					$pintro = get_sub_field('intro');
					$plink  = get_sub_field('link');
					$altimage = get_bloginfo( 'stylesheet_directory' ). '/assets/images/invicta-tiny.png';
					?>
					<div class="process-item">
						<span class="process-icon">
							<?php if($pimage) { ?>
							<img src="<?=$pimage['url']; ?>" alt="<?=$pimage['alt'] ?>" />
							<?php } else { ?>
								<img src="<?=$altimage;?>" alt="<?=$ptitle;?>" />
							<?php } ?>
						</span>
						<h4><?=$ptitle;?></h4>
						<?php if($pintro) {?>
						<p class="process-intro">
							<?=$pintro;?>
						</p>
						<?php };?>
						<?php if($plink) {?>
							<a href="<?=$plink['url'];?>" class="button"><?=$plink['title'];?></a>
						<?php };?>
					</div>
					<?php endwhile;?>
				</div>
			</div>
		</section>
	<?php endif;
}
//function to display links from the ACF flexi-content fields
function display_flexi_links() {
	$rows = get_sub_field('link_item');
  if($rows):?>
		<section class="links-wrapper">
			<div class="grid-container">
      <?php $lcopy = get_sub_field('link_list_copy');
			if($lcopy) {?>
			<div class="lcopy-wrap">
				<?=$lcopy;?>
			</div>
			<?php } ?>
				<div class="links-container">
					<?php while( have_rows('link_item') ):the_row(); // loop through the rows of data
					// vars
					$ltitle = get_sub_field('title');
					$llink  = get_sub_field('link');
					?>
					<div class="process-item">
						<?php if($llink) {?>
							<a href="<?=$llink['url'];?>" class="llist"><?=$ltitle;?></a>
						<?php } else {
							if($ltitle){ ?>
							<span class="llist"><?=$ltitle;?></span>
						<?php }} ;?>
					</div>
					<?php endwhile;?>
				</div>
			</div>
		</section>
	<?php endif;
}

//function to display stats from the ACF flexi-content fields
function display_flexi_stats() {
	$rows = get_sub_field('stats_item');
  if($rows):?>
		<section class="stats-wrapper">
			<div class="grid-container">
				<div class="stats-container">
					<?php while( have_rows('stats_item') ):the_row(); // loop through the rows of data
					// vars
          $stitle = get_sub_field('stat_title');
          $snumber = get_sub_field('stat_number');					?>
					<div class="stat-item">
					  <div class="stat-count"><?=$snumber;?></div>
					  <div class="stat-title"><?=$stitle;?></div>
					</div>
					<?php endwhile;?>
				</div>
			</div>
		</section>
	<?php endif;
}

//function to display text copy from the ACF flexi-content fields
function display_flexi_copy() {
  $sc = get_sub_field('layout_options');
  $ac = get_sub_field('align');
  $col1 = get_sub_field('copy');
    echo '<section class="flexi-copy '.$sc.' '.$ac.'">';
    echo '<div class="grid-container">';
    echo '<div class="entry-content">'.$col1.'</div>';
    echo '</div>';
		echo '</section>';
		}

//function to display Goals from the ACF flexi-content fields
function display_flexi_goal() {
  $gbc = get_sub_field('brand_colour');
  $gbl = get_sub_field('brand_logo');
	$gbi = get_sub_field('background_image');
	$ggc = get_sub_field('main_goal'); ?>
	<section class="flexi-goals">
		<div class="grid-container">
			<div class="goal-wrap">
				<div class="goal-content" style="background-color:<?=$gbc;?>">
					<?php if($gbl){?>
							<img class="lazy" data-src="<?=$gbl;?>">
					<?php }
					?>
					<h6>Main Goal</h6>
					<p><?=$ggc;?></p>
				</div>
				<?php if($gbi){?>
				<div class="goal-image" data-background="<?=$gbi;?>">
				&nbsp;
				</div>
				<?php } else { ?>
					<div class="goal-image bg-color" style="background-color:<?=$gbc;?>">
				<?php }
				?>
			</div>
		</div>

	</section>
<?php
}

//function to display call out from the ACF flexi-content fields
function display_flexi_callout() {
  $ctai = get_sub_field('cta_intro');
  $ctac = get_sub_field('cta_copy');
  $ctal = get_sub_field('cta_link');
	$ctalt = get_sub_field('cta_link_text');
	$ctacl = get_sub_field('cta_class');
    echo '<section class="flexi-callout">';
    echo '<div class="grid-container">';
    echo '<div class="call-out-wrapper">';
    if($ctai){
    echo '<div class="cta-intro">'.$ctai.'</div>';
    }
    echo '<div class="cta-copy">'.$ctac.'</div>';
    echo '<a class="button '.$ctacl.'" href="'.$ctal.'">'.$ctalt.'</a>';
    echo '</div></div>';
    echo '</section>';
}



//function to display an image from the ACF flexi-content fields
function display_flexi_image() {
  $sc = get_sub_field('image');
  $lo = get_sub_field('layout_options');
  $si = get_sub_field('sizing');
    echo '<section class="flexi-image '.$lo.' '.$si.'">';?>
    <div class="grid-container">
    <?php if($sc){
      $scu = $sc['url'];?>
      <img class="lazy" data-src="<?=$scu;?>"/>

    <?php } ?>
    </div>
    <?php
    echo '</section>';
}

//function to display an testimonial from the ACF flexi-content fields
function display_flexi_testimonial() {
	$ftt = get_sub_field('testimonial_block_title');
	$ftq = get_sub_field('quotation');
  $fta = get_sub_field('author_full_name');
	$ftat = get_sub_field('author_title_company');
	$ftai = get_sub_field('author_image');
    echo '<section class="flexi-testimonial">';?>
    <div class="flexi-testimonial-wrapper">
<?php if($ftq){?><h3><?=$ftt;?></h3><?php };?>
			<?php if($ftq){?>
				<p class="testimonial-quote"><?=$ftq;?></p>
				<div class="testimonial-author">
					<?php if($ftai){ ?>
						<div class="testimonial-author-image">
							<img class="lazy" data-src="<?=$ftai;?>"/>
						</div>
					<?php } ?>
						<div class="testimonial-author-info">
							<?php if($fta){ ?>
								<h3><?=$fta;?></h3>
							<?php } ?>
							<?php if($ftat){ ?>
								<p><?=$ftat;?></p>
							<?php } ?>
						</div>
				</div>
			<?php } ?>
    </div>
    <?php
    echo '</section>';
}

//function to display FAQ's from the ACF flexi-content fields
function display_flexi_faq() {
	$rows = get_sub_field('faq_items');
  if($rows):?>
		<section class="faq-wrapper">
			<div class="grid-container">
      <?php $faqcopy = get_sub_field('faq_copy');
			if($faqcopy) {?>
			<div class="faq-copy-wrap">
				<?=$faqcopy;?>
			</div>
			<?php } ?>
				<div class="faq-container">
					<?php while( have_rows('faq_items') ):the_row(); // loop through the rows of data
					// vars
					$fquestion = get_sub_field('question');
					$fanswer  = get_sub_field('answer');
					?>
					<div class="faq-item">
						<div class="faqq"><strong><?=$fquestion;?></strong></div>
            <div class="faqa"><?=$fanswer;?></div>
					</div>
					<?php endwhile;?>
				</div>
			</div>
		</section>
	<?php endif;
}
//function to convert the FAQ's to Schema
function display_flexi_faqschema() {
  $rows = get_sub_field('faq_items');
  if($rows) {
    $schema = array (
      '@context'  => "https://schema.org",
      '@type'     => "FAQPage"
    );

    $schema['mainEntity'] = array();

      while( have_rows('faq_items') ):the_row();
        $question = get_sub_field('question');
        $answer = esc_html(get_sub_field('answer'));

      $questions = array(
        '@type' => 'Question',
        'name' => $question,
          'acceptedAnswer' => array(
            '@type' => 'Answer',
            'text' => $answer
          )
        );
        array_push($schema['mainEntity'], $questions);

      endwhile;
  }
  echo '<script type="application/ld+json">' . json_encode($schema) . '</script>';

}

//Main function that takes all layouts and display on page
add_action('generate_before_main_content','display_flexi_content');
function display_flexi_content() {
global $post;
// check if the flexible content field has rows of data
 if( have_rows('flexi_content') ):

  // loop through the rows of data
  while ( have_rows('flexi_content') ) : the_row();
  // check current row layout
    if( get_row_layout() == 'copy' ):
      // check if the nested repeater field has rows of data
      display_flexi_copy();
    elseif( get_row_layout() == 'image_links' ):
      // check if the nested repeater field has rows of data
      display_flexi_image_links();
    elseif( get_row_layout() == 'image' ):
      // check if the nested repeater field has rows of data
      display_flexi_image();
    elseif( get_row_layout() == 'members' ):
      // check if the nested repeater field has rows of data
      display_flexi_team();
    elseif( get_row_layout() == 'image_content' ):
      // check if the nested repeater field has rows of data
      display_flexi_media_content();
    elseif( get_row_layout() == 'intro_panel' ):
      // check if the nested repeater field has rows of data
      display_flexi_intro_panel();
    elseif( get_row_layout() == 'title_content' ):
      // check if the nested repeater field has rows of data
      display_flexi_title_content();
    elseif( get_row_layout() == 'post_list' ):
      // check if the nested repeater field has rows of data
      display_flexi_post_list();
    elseif( get_row_layout() == 'gallery' ):
      // check if the nested repeater field has rows of data
      display_flexi_gallery();
    elseif( get_row_layout() == 'newsletter' ):
      // check if the nested repeater field has rows of data
      display_flexi_newsletter();
    elseif( get_row_layout() == 'quote' ):
      // check if the nested repeater field has rows of data
      display_flexi_quote();
    elseif( get_row_layout() == 'callout' ):
      // check if the nested repeater field has rows of data
      display_flexi_callout();
    elseif( get_row_layout() == 'icon_feature' ):
      // check if the nested repeater field has rows of data
      display_flexi_features();
    elseif( get_row_layout() == 'link_list' ):
      // check if the nested repeater field has rows of data
      display_flexi_links();
    elseif( get_row_layout() == 'faq_list' ):
      // check if the nested repeater field has rows of data
      display_flexi_faq();
    elseif( get_row_layout() == 'case_study' ):
      // check if the nested repeater field has rows of data
      display_flexi_casestudy();
    elseif( get_row_layout() == 'stats_list' ):
      // check if the nested repeater field has rows of data
      display_flexi_stats();
    elseif( get_row_layout() == 'testimonial' ):
      // check if the nested repeater field has rows of data
      display_flexi_testimonial();
    elseif( get_row_layout() == 'goal' ):
      // check if the nested repeater field has rows of data
      display_flexi_goal();
    endif;

  endwhile;
  else :

endif;
}

add_action('wp_head','display_flexi_schema');
function display_flexi_schema() {
global $post;
// check if the flexible content field has rows of data
 if( have_rows('flexi_content') ):

  // loop through the rows of data
  while ( have_rows('flexi_content') ) : the_row();
  if( get_row_layout() == 'faq_list' ):
    // check if the nested repeater field has rows of data
    display_flexi_faqschema();
  endif;

endwhile;
else :

endif;
}
