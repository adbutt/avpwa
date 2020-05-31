<?php

/**
 * Custom functions that display Flexbile Content Layouts.
 *
 * @package wpgst
 */

//function to display Flexi-Copy the ACF flexi-content fields
function display_spflexi_html_block($i)
{
	$mci = get_sub_field('image');
	$mct = get_sub_field('title');
	$mcpt = get_sub_field('pre-title');
	$mcc = get_sub_field('content');
	$mcst = get_sub_field('styling');
	$uid = get_sub_field('uid');
	$html = '';
	if (!$uid) {
		$uid = 'flexi-' . $i;
	} else {
		$uid = $uid;
	}
	if (!$mci) {
		$html .= '<div id="' . $uid . '" class="spflexi-html-block ' . $mcst . '" >';
	} else {
		$html .= '<div id="' . $uid . '" class="spflexi-html-block ' . $mcst . '" style="background-image: url(' . $mci . ')" >';
	}
	$html .= '<div class="spflexi-html-block--inner">';
	if ($mcpt) {
		$html .= '<span class="intro">' . $mcpt . '</span>';
	}
	if ($mct) {
		$html .= '<h2>' . $mct . '</h2>';
	}
	$html .= $mcc . '</div>';
	$html .= '</div>';
	echo $html;
}

//function to display an image from the ACF flexi-content fields
function display_spflexi_image($i)
{
	$st = get_sub_field('title');
	$spt = get_sub_field('pre-title');
	$sc = get_sub_field('image');
	$lo = get_sub_field('layout_options');
	$si = get_sub_field('sizing');
	$scu = $sc['url'];
	$uid = get_sub_field('uid');
	$html = '';
	if (!$uid) {
		$uid = 'flexi-' . $i;
	} else {
		$uid = $uid;
	}
	$html = '';
	$html .= '<div id="' . $uid . '" class="spflexi-image-title ' . $lo . ' ' . $si . '">';
	$html .= '<div class="spflexi-image-title--inner">';
	if ($spt) {
		$html .= '<span class="intro">' . $spt . '</span>';
	}
	if ($st) {
		$html .= '<h3>' . $st . '</h3>';
	}
	$html .= '<img class="lazy" data-src="' . $scu . '" />';
	$html .= '</div>';
	$html .= '</div>';
	echo $html;
}

//function to display Image / Content from the ACF flexi-content fields
function display_spflexi_media_content($i)
{
	$mct = get_sub_field('title');
	$mcpt = get_sub_field('pre-title');
	$mci = get_sub_field('image');
	$mcc = get_sub_field('content');
	$mcip = get_sub_field('image_position');
	$mcst = get_sub_field('styling');
	$uid = get_sub_field('uid');
	$html = '';
	if (!$uid) {
		$uid = 'flexi-' . $i;
	} else {
		$uid = $uid;
	}
	$html .= '<div id="' . $uid . '" class="spflexi-media-content section ' . $mcst . ' unstyled-' . $mcip . '">';
	$html .= '<div class="media-content-wrapper">';
	if ($mcip == 'right') {
		$html .= '<div class="grid-container flexit">';

		$html .= '<div class="flex-mc-content">';
		if ($mcpt) {
			$html .= '<span class="intro">' . $mcpt . '</span>';
		}
		if ($mct) {
			$html .= '<h2>' . $mct . '</h2>';
		}
		$html .= $mcc . '</div>';
		$html .= '<div class="flex-mc-image"><img class="lazy" data-src="' . $mci . '"/>';
		$html .= '</div>';
	} else {
		$html .= '<div class="grid-container flexit">';
		$html .= '<div class="flex-mc-image"><img class="lazy" data-src="' . $mci . '"/>';
		$html .= '</div>';
		$html .= '<div class="flex-mc-content">';
		if ($mcpt) {
			$html .= '<span class="intro">' . $mcpt . '</span>';
		}
		if ($mct) {
			$html .= '<h2>' . $mct . '</h2>';
		}
		$html .= $mcc . '</div>';
	}
	$html .= '</div>';
	$html .= '</div>';
	$html .= '</div>';

	echo $html;
}

//function to display Title / Content from the ACF flexi-content fields
function display_spflexi_title_content($i)
{
	$st = get_sub_field('section_title');
	$tt = get_sub_field('title');
	$tc = get_sub_field('content');
	$ttp = get_sub_field('title_position');
	$tcc = get_sub_field('layout_options');
	$uid = get_sub_field('uid');

	$html = '';
	if (!$uid) {
		$uid = 'flexi-' . $i;
	} else {
		$uid = $uid;
	}

	$html .= '<div id="' . $uid . '" class="spflexi-title-content ' . $tcc . ' ftc-' . $ttp . '">';
	$html .= '<div class="title-content-wrapper">';
	$html .= '<div class="grid-container">';

	if ($ttp == 'right') {
		$html .= '<div class="flexit">';
		$html .= '<div class="t-copy">' . $tc . '</div>';
		$html .= '<div class="title-wrap">';
		if ($st) {
			$html .= '<h4 class="title-content">' . $st . '</h4>';
		}
		$html .= '<div class="t-title">' . $tt . '</div></div>';
		$html .= '</div>';
	} else {
		$html .= '<div class="flexit">';
		$html .= '<div class="title-wrap">';
		if ($st) {
			$html .= '<h4 class="title-content">' . $st . '</h4>';
		}
		$html .= '<div class="t-title">' . $tt . '</div></div>';
		$html .= '<div class="t-copy">' . $tc . '</div>';
		$html .= '</div>';
	}
	$html .= '</div>';
	$html .= '</div>';
	$html .= '</div>';
	echo $html;
}

//function to display a Icon Features from the ACF flexi-content fields
function display_spflexi_features($i)
{
	$rows = get_sub_field('features');
	if ($rows) :
		$ftitle = get_sub_field('features_title');
		$stitle = get_sub_field('features_sub-title');
		$tcc = get_sub_field('styling');
		$uid = get_sub_field('uid');
		$html = '';
		if (!$uid) {
			$uid = 'flexi-' . $i;
		} else {
			$uid = $uid;
		}
		$html .= '<div id="' . $uid . '" class="spflexi-process-wrapper ' . $tcc . '">';
		if ($stitle) {
			$html .= '<div class="stitle-hold"><span class="intro">' . $stitle . '</span></div>';
		}
		if ($ftitle) {
			$html .= '<div class="ptitle-hold"><h3>' . $ftitle . '</h3></div>';
		}
		$html .= '<div class="grid-container">';
		$html .= '<div class="process-container">';
		while (have_rows('features')) : the_row();  // loop through the rows of data
			// vars
			$pimage = get_sub_field('icon');
			$ptitle = get_sub_field('title');
			$pintro = get_sub_field('intro');
			$plink  = get_sub_field('link');
			$altimage = get_bloginfo('stylesheet_directory') . '/assets/images/invicta-tiny.png';
			$html .= '<div class="process-item">';
			$html .= '<span class="process-icon">';
			if ($pimage) {
				$html .= '<img src="' . $pimage['url'] . '" alt="' . $pimage['alt'] . '" />';
			} else {
				$html .= '<img src="' . $altimage . '" alt="' . $ptitle . '" />';
			}
			$html .= '</span>';
			$html .= '<h4>' . $ptitle . '</h4>';
			if ($pintro) {
				$html .= '<p class="process-intro">' . $pintro . '</p>';
			}
			if ($plink) {
				$html .= '<a href="' . $plink['url'] . '" class="button">' . $plink['title'] . '</a>';
			}
			$html .= '</div>';
		endwhile;
		$html .= '</div>';
		$html .= '</div>';
		$html .= '</div>';
		echo $html;
	endif;
}

//function to display stand-out boxed content
function display_spflexi_standout($i)
{
	$uid = get_sub_field('uniqueid');
	$stt = get_sub_field('title');
	$stpt = get_sub_field('pre-title');
	$stc = get_sub_field('content');
	$stl = get_sub_field('layout_options');
	$html = '';
	if (!$uid) {
		$uid = 'flexi-' . $i;
	} else {
		$uid = $uid;
	}
	$html .= '<div id="' . $uid . '" class="spflexi-standout-content ' . $stl . '">';
	$html .= '<div class="spflexi-standout-content--inner">';
	if ($stpt) {
		$html .= '<div class="stitle-hold"><span class="intro">' . $stpt . '</span></div>';
	}
	if ($stt) {
		$html .= '<div class="ptitle-hold"><h3>' . $stt . '</h3></div>';
	}
	$html .= '<div class="spflexi-standout-content--innerc">' . $stc . '</div>';
	$html .= '</div>';
	$html .= '</div>';
	echo $html;
}

//function to display call out from the ACF flexi-content fields
function display_spflexi_callout($i)
{
	$mci = get_sub_field('background_image');
	$ctai = get_sub_field('cta_intro');
	$ctac = get_sub_field('cta_copy');
	$ctal = get_sub_field('cta_link');
	$ctalt = get_sub_field('cta_link_text');
	$mcst = get_sub_field('styling');
	$uid = get_sub_field('uid');
	$html = '';
	if (!$uid) {
		$uid = 'flexi-' . $i;
	} else {
		$uid = $uid;
	}
	if ($mci) {
		$html .= '<div id="' . $uid . '" class="spflexi-callout ' . $mcst . '" style="background-image: url(' . $mci . ')" >';
	} else {
		$html .= '<div id="' . $uid . '" class="spflexi-callout ' . $mcst . '" >';
	}
	$html .= '<div class="sp-call-out-wrapper">';
	$html .= '<div class="cta-copy"><h3>' . $ctac . '</h3></div>';
	if ($ctai) {
		$html .= '<div class="cta-intro"><span class="intro">' . $ctai . '</span></div>';
	}
	$html .= '<a class="button" href="' . $ctal . '">' . $ctalt . '</a>';
	$html .= '</div>';
	$html .= '</div>';
	echo $html;
}
//function to display triangled splitter
function display_sptriangled_splitter($i)
{
	$cs = get_sub_field('color_selection');
	$uid = get_sub_field('uid');
	$html = '';
	if (!$uid) {
		$uid = 'flexi-' . $i;
	} else {
		$uid = $uid;
	}

	$html .= '<div id="' . $uid . '" class="splitter ' . $cs . '"><div class="splitter-inner"></div>';
	if ($cs == 'wtg' || $cs == 'btg') {
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon fill="#f4f7f8" points="0,100 100,0 100,100" />
				</svg>';
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
				<polygon fill="#f4f7f8" points="0 0, 100 100, 0 100" />
				</svg>';
	}
	if ($cs == 'wtb' || $cs == 'gtb') {
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon fill="#031637" points="0,100 100,0 100,100" />
				</svg>';
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
				<polygon fill="#031637" points="0 0, 100 100, 0 100" />
				</svg>';
	}
	if ($cs == 'gtw' || $cs == 'btw') {
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon fill="#ffffff" points="0,100 100,0 100,100" />
				</svg>';
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
				<polygon fill="#ffffff" points="0 0, 100 100, 0 100" />
				</svg>';
	}

	$html .= '</div>';

	echo $html;
}
//function to display triangled splitter
function display_diagonal_splitter($i)
{
	$cs = get_sub_field('color_selection');
	$uid = get_sub_field('uid');
	$html = '';
	if (!$uid) {
		$uid = 'flexi-' . $i;
	} else {
		$uid = $uid;
	}

	$html .= '<div id="' . $uid . '" class="splitter-single ' . $cs . '">';
	if ($cs == 'dgr') {
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon fill="#f4f7f8" points="0,100 100,0 100,100" />
				</svg>';
	}
	if ($cs == 'dbr') {
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon fill="#031637" points="0,100 100,0 100,100" />
				</svg>';
	}
	if ($cs == 'dwr') {
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon fill="#ffffff" points="0,100 100,0 100,100" />
				</svg>';
	}
	if ($cs == 'dgl') {
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon fill="#f4f7f8" points="0 0, 100 100, 0 100" />
				</svg>';
	}
	if ($cs == 'dbl') {
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon fill="#031637" points="0 0, 100 100, 0 100" />
				</svg>';
	}
	if ($cs == 'dwl') {
		$html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon fill="#ffffff" points="0 0, 100 100, 0 100" />
				</svg>';
	}

	$html .= '</div>';

	echo $html;
}
//function to display hero area
function display_hero_area($i)
{
	$mci = get_sub_field('background_image');
	$dht = get_sub_field('main_title');
	$dhst = get_sub_field('sub-title');
	$dhc = get_sub_field('content');
	$dhs = get_sub_field('styling');
	$uid = get_sub_field('uid');
	$html = '';
	if (!$uid) {
		$uid = 'flexi-' . $i;
	} else {
		$uid = $uid;
	}
	if ($mci) {
		$html .= '<div id="' . $uid . '" class="sp-service-header ' . $dhs . '" style="background-image: url(' . $mci . ')" >';
	} else {
		$html .= '<div id="' . $uid . '" class="sp-service-header ' . $dhs . '" >';
	}
	$html .= '<div class="sp-service-header--inner">';
	if ($dht) {
		$html .= '<h1 class="servicehd">' . $dht . '</h1>';
	}
	if ($dhst) {
		$html .= '<h2>' . $dhst . '</h2>';
	}
	if ($dhc) {
		$html .= '<div class="service-header--content">' . $dhc . '</div>';
	}
	$html .= '</div>';
	$html .= '</div>';
	echo $html;
}
//function to display FAQ's from the ACF flexi-content fields
function display_spflexi_faq($i)
{
	$rows = get_sub_field('faq_items');
	if ($rows) : ?>
		<section class="spfaq-wrapper">
			<div class="grid-container">
				<?php $faqcopy = get_sub_field('faq_copy');
				if ($faqcopy) { ?>
					<div class="faq-copy-wrap">
						<?= $faqcopy; ?>
					</div>
				<?php } ?>
				<div class="faq-container">
					<?php while (have_rows('faq_items')) : the_row(); // loop through the rows of data
						// vars
						$fquestion = get_sub_field('question');
						$fanswer  = get_sub_field('answer');
					?>
						<div class="faq-item">
							<div class="faqq"><strong><?= $fquestion; ?></strong></div>
							<div class="faqa"><?= $fanswer; ?></div>
						</div>
					<?php endwhile; ?>
				</div>
			</div>
		</section>
<?php endif;
}
//function to convert the FAQ's to Schema
function display_spflexi_faqschema($i)
{
	$rows = get_sub_field('faq_items');
	if ($rows) {
		$schema = array(
			'@context'  => "https://schema.org",
			'@type'     => "FAQPage"
		);

		$schema['mainEntity'] = array();

		while (have_rows('faq_items')) : the_row();
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
add_action('generate_before_main_content', 'display_spflexi_content');
function display_spflexi_content()
{
	global $post;
	// check if the flexible content field has rows of data
	if (have_rows('spflexi_content')) :
		$i = -1;
		// loop through the rows of data
		while (have_rows('spflexi_content')) : the_row();
			$i++;
			// check current row layout
			if (get_row_layout() == 'hero_intro') :
				// check if the nested repeater field has rows of data
				display_hero_area($i);
			// check current row layout
			elseif (get_row_layout() == 'html_content') :
				// check if the nested repeater field has rows of data
				display_spflexi_html_block($i);
			elseif (get_row_layout() == 'image') :
				// check if the nested repeater field has rows of data
				display_spflexi_image($i);
			elseif (get_row_layout() == 'image_content') :
				// check if the nested repeater field has rows of data
				display_spflexi_media_content($i);
			elseif (get_row_layout() == 'title_content') :
				// check if the nested repeater field has rows of data
				display_spflexi_title_content($i);
			elseif (get_row_layout() == 'icon_feature') :
				// check if the nested repeater field has rows of data
				display_spflexi_features($i);
			elseif (get_row_layout() == 'standout') :
				// check if the nested repeater field has rows of data
				display_spflexi_standout($i);
			elseif (get_row_layout() == 'callout') :
				// check if the nested repeater field has rows of data
				display_spflexi_callout($i);
			elseif (get_row_layout() == 'triangle_splitter') :
				// check if the nested repeater field has rows of data
				display_sptriangled_splitter($i);
			elseif (get_row_layout() == 'diagonal_splitter') :
				// check if the nested repeater field has rows of data
				display_diagonal_splitter($i);
			elseif (get_row_layout() == 'faq_list') :
				// check if the nested repeater field has rows of data
				display_spflexi_faq($i);
			endif;

		endwhile;
	else :

	endif;
}

add_action('wp_head', 'display_spflexi_schema');
function display_spflexi_schema()
{
	global $post;
	// check if the flexible content field has rows of data
	if (have_rows('spflexi_content')) :
		// loop through the rows of data
		while (have_rows('spflexi_content')) : the_row();
			if (get_row_layout() == 'faq_list') :
				// check if the nested repeater field has rows of data
				display_spflexi_faqschema();
			endif;

		endwhile;
	else :

	endif;
}
