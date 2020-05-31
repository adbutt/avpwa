<?php
define('WPGST_THEME_DIRECTORY', esc_url(trailingslashit(get_template_directory_uri())));
define('WPGST_REQUIRE_DIRECTORY', trailingslashit(get_stylesheet_directory()));
require_once(WPGST_REQUIRE_DIRECTORY . 'inc/theme_cpt.php');
require_once(WPGST_REQUIRE_DIRECTORY . 'inc/theme_flexi.php');
require_once(WPGST_REQUIRE_DIRECTORY . 'inc/enqueue-scripts.php');
require_once(WPGST_REQUIRE_DIRECTORY . 'inc/extend-api.php');
// require_once(WPGST_REQUIRE_DIRECTORY . 'inc/service_flexi.php');

/* hooks and filters */

// enqueue-scripts.php.
add_action('wp_enqueue_scripts', 'invict_enqueue_styles');
add_action('wp_enqueue_scripts', 'invict_enqueue_spa_scripts');

// extend-api.php.
add_action('rest_api_init', 'invicta_extend_api_response');


/**
 * Check if dev mode
 */
define('LOCALHOST', '.invicta');

$url = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
if (strpos($url, LOCALHOST) !== false) {
	define('DEV_MODE', true);
} else {
	define('DEV_MODE', false);
}

/**
 * Add browser as class to body
 */
require(get_stylesheet_directory() . '/inc/Browser.php');
function pwd_browser_detect($classes)
{
	$browser = new Browser();
	$detected = $browser->getBrowser();
	$class = str_replace(' ', '_', strtolower($detected));
	$classes[] = $class;
	return $classes;
}
add_filter('body_class', 'pwd_browser_detect');

/**
 * Activate theme options
 */
require(get_stylesheet_directory() . '/inc/options.php');
add_action('customize_register', 'themeCustomizer::customizer_settings');


/**
 * Add Google Fonts
 * <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500|Roboto+Slab:400,700&display=swap" rel="stylesheet">

 */
function invicta_enqueue_google_fonts()
{
	wp_enqueue_style('opensans', '//fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap');
}
add_action('wp_enqueue_scripts', 'invicta_enqueue_google_fonts');


/**
 * Enqueue Scripts
 */
function invicta_child_enqueue_scripts()
{
	wp_enqueue_style('dashicons');
	if (is_rtl()) {
		wp_enqueue_style('generatepress-rtl', trailingslashit(get_template_directory_uri()) . 'rtl.css');
	}
	if (DEV_MODE) {
		wp_enqueue_style('project', get_stylesheet_directory_uri() . '/assets/css/style.css');
	} else {
		wp_enqueue_style('project', get_stylesheet_directory_uri() . '/assets/css/style.min.css');
	}
	wp_enqueue_script('jquery');
	if (DEV_MODE) {
		wp_enqueue_script('vendor', get_stylesheet_directory_uri() . '/assets/js/vendor.js');
		wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/assets/js/custom.min.js');
	} else {
		wp_enqueue_script('vendor', get_stylesheet_directory_uri() . '/assets/js/vendor.min.js');
		wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/assets/js/custom.min.js');
	}
}
add_action('wp_enqueue_scripts', 'invicta_child_enqueue_scripts', 100);




/**
 * Shortcodes
 */
// social profiles
function invicta_social_shortcode()
{
	$facebook_url = get_theme_mod('facebook');
	$twitter_url = get_theme_mod('twitter');
	$instagram_url = get_theme_mod('instagram');
	$youtube_url = get_theme_mod('youtube');
	$linkedin_url = get_theme_mod('linkedin');
	$pinterest_url = get_theme_mod('pinterest');
	$google_url = get_theme_mod('google');
	$facebook = get_theme_mod('facebook');
	$facebook_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>';
	$twitter = get_theme_mod('twitter');
	$twitter_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>';
	$instagram = get_theme_mod('instagram');
	$instagram_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>';
	$youtube = get_theme_mod('youtube');
	$youtube_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.918 13.933h.706v3.795h-.706v-.419c-.13.154-.266.272-.405.353-.381.218-.902.213-.902-.557v-3.172h.705v2.909c0 .153.037.256.188.256.138 0 .329-.176.415-.284v-2.881zm.642-4.181c.2 0 .311-.16.311-.377v-1.854c0-.223-.098-.38-.324-.38-.208 0-.309.161-.309.38v1.854c-.001.21.117.377.322.377zm-1.941 2.831h-2.439v.747h.823v4.398h.795v-4.398h.821v-.747zm4.721 2.253v2.105c0 .47-.176.834-.645.834-.259 0-.474-.094-.671-.34v.292h-.712v-5.145h.712v1.656c.16-.194.375-.354.628-.354.517.001.688.437.688.952zm-.727.043c0-.128-.024-.225-.075-.292-.086-.113-.244-.125-.367-.062l-.146.116v2.365l.167.134c.115.058.283.062.361-.039.04-.054.061-.141.061-.262v-1.96zm10.387-2.879c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-10.746-2.251c0 .394.12.712.519.712.224 0 .534-.117.855-.498v.44h.741v-3.986h-.741v3.025c-.09.113-.291.299-.436.299-.159 0-.197-.108-.197-.269v-3.055h-.741v3.332zm-2.779-2.294v1.954c0 .703.367 1.068 1.085 1.068.597 0 1.065-.399 1.065-1.068v-1.954c0-.624-.465-1.071-1.065-1.071-.652 0-1.085.432-1.085 1.071zm-2.761-2.455l.993 3.211v2.191h.835v-2.191l.971-3.211h-.848l-.535 2.16-.575-2.16h-.841zm10.119 10.208c-.013-2.605-.204-3.602-1.848-3.714-1.518-.104-6.455-.103-7.971 0-1.642.112-1.835 1.104-1.848 3.714.013 2.606.204 3.602 1.848 3.715 1.516.103 6.453.103 7.971 0 1.643-.113 1.835-1.104 1.848-3.715zm-.885-.255v.966h-1.35v.716c0 .285.024.531.308.531.298 0 .315-.2.315-.531v-.264h.727v.285c0 .731-.313 1.174-1.057 1.174-.676 0-1.019-.491-1.019-1.174v-1.704c0-.659.435-1.116 1.071-1.116.678.001 1.005.431 1.005 1.117zm-.726-.007c0-.256-.054-.445-.309-.445-.261 0-.314.184-.314.445v.385h.623v-.385z"/></svg>';
	$linkedin = get_theme_mod('linkedin');
	$linkedin_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>';
	$pinterest = get_theme_mod('pinterest');
	$pinterest_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.521-.995-.521-1.597 0-1.544 1.169-3.038 3.161-3.038 1.72 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.205-2.201 3.205-.687 0-1.201-.568-1.036-1.265.197-.833.58-1.73.58-2.331 0-.537-.288-.986-.886-.986-.702 0-1.268.727-1.268 1.7 0 .621.211 1.04.211 1.04s-.694 2.934-.821 3.479c-.142.605-.086 1.454-.025 2.008-2.603-1.02-4.448-3.553-4.448-6.518 0-3.866 3.135-7 7-7s7 3.134 7 7-3.135 7-7 7z"/></svg>';
	$google = get_theme_mod('google');
	$google_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z"/></svg>';

	$html = '<ul class="social-media">';
	if ($facebook_url) {
		$html .= '<li class="facebook">';
		$html .= '<a href="' . $facebook_url . '">';
		$html .= $facebook_icon;
		$html .= '</a>';
		$html .= '</li>';
	}
	if ($twitter_url) {
		$html .= '<li class="twitter">';
		$html .= '<a href="' . $twitter_url . '">';
		$html .= $twitter_icon;
		$html .= '</a>';
		$html .= '</li>';
	}
	if ($instagram_url) {
		$html .= '<li class="instagram">';
		$html .= '<a href="' . $instagram_url . '">';
		$html .= $instagram_icon;
		$html .= '</a>';
		$html .= '</li>';
	}
	if ($youtube_url) {
		$html .= '<li class="youtube">';
		$html .= '<a href="' . $youtube_url . '">';
		$html .= $youtube_icon;
		$html .= '</a>';
		$html .= '</li>';
	}
	if ($linkedin_url) {
		$html .= '<li class="linkedin">';
		$html .= '<a href="' . $linkedin_url . '">';
		$html .= $linkedin_icon;
		$html .= '</a>';
		$html .= '</li>';
	}
	if ($pinterest_url) {
		$html .= '<li class="pinterest">';
		$html .= '<a href="' . $pinterest_url . '">';
		$html .= $pinterest_icon;
		$html .= '</a>';
		$html .= '</li>';
	}
	if ($google_url) {
		$html .= '<li class="google">';
		$html .= '<a href="' . $google_url . '">';
		$html .= $google_icon;
		$html .= '</a>';
		$html .= '</li>';
	}
	$html .= '</ul>';

	return $html;
}
add_shortcode('social', 'invicta_social_shortcode');

// phone number
function invicta_phone_shortcode()
{
	$phone_link = preg_replace('/\s+/', '', $phone);
	$phone_link = str_replace(array('(', ')'), '', $phone_link);
	$phone_link = ltrim($phone_link, '0');
	$content .= '<a class="tel-link" href="tel:+61' . $phone_link . '">';
	$content .= $phone;
	$content .= '</a>';
	return $content;
}
add_shortcode('phone', 'invicta_phone_shortcode');

// email
function invicta_email_shortcode()
{
	$email = get_theme_mod('email_address');
	$content .= '<a class="email-link" href="mailto:' . $email . '">';
	$content .= $email;
	$content .= '</a>';
	return $content;
}
add_shortcode('email', 'invicta_email_shortcode');


/**
 * Function to check if page slug exists
 */
function invicta_the_slug_exists($post_name)
{
	global $wpdb;
	if ($wpdb->get_row("SELECT post_name FROM wp_posts WHERE post_name = '" . $post_name . "'", 'ARRAY_A')) {
		return true;
	} else {
		return false;
	}
}

/**
 * Gravity Forms Functions
 */
// Gravity Forms Input Mask Phone (Australia)
function invicta_add_mask($masks)
{
	$masks['AU Phone'] = '(99) 9999-9999';
	return $masks;
}
add_filter('gform_input_masks', 'invicta_add_mask');

// Add hide label support
add_filter('gform_enable_field_label_visibility_settings', '__return_true');

if (function_exists('acf_add_options_page')) {
	acf_add_options_page();
}

// Add Social Media Items to header
function social_hook()
{
	$html = '';
	$html .= '<div class="social-addons for-tablets-up">';
	$html .= '<div class="contact-wrap">';
	$html .= do_shortcode('[social]');
	$html .= '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">';
	$html .= '	<input type="hidden" name="cmd" value="_s-xclick">';
	$html .= '	<input type="hidden" name="hosted_button_id" value="D5P9HE9P7C9PA">';
	$html .= '	<input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal — The safer, easier way to pay online.">';
	$html .= '	<img alt="" border="0" src="https://www.paypalobjects.com/en_AU/i/scr/pixel.gif" width="1" height="1">';
	$html .= '</form>';
	$html .= '</div>';
	$html .= '</div>';
	echo $html;
}
add_action('generate_after_header_content', 'social_hook');

// Open Site Wrapper above header
function site_wrapper_head()
{
	if (!is_page_template('landing-template.php')) {
		echo '<div class="site-wrapper grid-parent">';
	}
}
// add_action('generate_before_header', 'site_wrapper_head', 10);

// Close Site Wrapper after footer
function site_wrapper_foot()
{
	if (!is_page_template('landing-template.php')) {
		echo '</div>';
	}
}
// add_action('generate_after_footer', 'site_wrapper_foot', 10);

// // Add Social Media Items to header
// function abn_hook() {
// 	echo '<div class="social-addons">123444355366</div>';
// }
// add_action('generate_after_footer_content', 'abn_hook');

add_filter('gform_submit_button', 'add_custom_css_classes', 10, 2);
function add_custom_css_classes($button, $form)
{
	$dom = new DOMDocument();
	$dom->loadHTML($button);
	$input = $dom->getElementsByTagName('input')->item(0);
	$classes = $input->getAttribute('class');
	$classes .= " g-submit-button";
	$input->setAttribute('class', $classes);
	return $dom->saveHtml($input);
}

// ADDS A SPAN TAG AFTER THE GRAVITY FORMS BUTTON
// aria-hidden is added for accessibility (hides the icon from screen readers)
add_filter('gform_submit_button', 'dw_add_span_tags', 10, 2);
function dw_add_span_tags($button, $form)
{

	return $button .= "<span aria-hidden='true'></span>";
}
//Limit Post Excerpts to 20 words
function invicta_excerpt_length($length)
{
	return 20;
}

add_filter('excerpt_length', 'invicta_excerpt_length');

//Remove 'Read More' Links from the excerpt
function invicta_read_more_link()
{
	if (!is_front_page()) {
		return '...';
	}
}
add_filter('excerpt_more', 'invicta_read_more_link', 99);

/**
 * Change the Rank Math Metabox Priority
 *
 * @param array $priority Metabox Priority.
 */
add_filter('rank_math/metabox/priority', function ($priority) {
	return 'low';
});


if (!function_exists('generate_post_image')) {
	add_action('generate_after_entry_header', 'generate_post_image');
	/**
	 * Prints the Post Image to post excerpts
	 */
	function generate_post_image()
	{
		// If there's no featured image, return.
		if (!has_post_thumbnail()) {
			return;
		}

		// If we're not on any single post/page or the 404 template, we must be showing excerpts.
		if (!is_singular() && !is_404()) {
			echo apply_filters('generate_featured_image_output', sprintf( // WPCS: XSS ok.
				'<a href="%1$s"><div class="post-image-invicta" data-background="%2$s">
						&nbsp;
				</div></a>',
				esc_url(get_permalink()),
				get_the_post_thumbnail_url(
					get_the_ID(),
					'full'
				)
			));
		}
	}
}

function generate_adam_image()
{
	// If there's no featured image, return.
	if (!has_post_thumbnail()) {
		return;
	}

	// If single post/page or the 404 template, we must be showing excerpts.
	if (is_singular()) {
		echo apply_filters('generate_featured_image_output', sprintf( // WPCS: XSS ok.
			'<div class="post-image-invicta balls" data-background="%1$s">
					&nbsp;
			</div>',
			get_the_post_thumbnail_url(
				get_the_ID(),
				'full'
			)
		));
	}
}



add_filter('generate_category_list_output', 'tu_remove_categories');
function tu_remove_categories($categories)
{
	if (is_home() || is_archive()) {
		return '';
	}

	return $categories;
}

add_action('generate_before_entry_title', 'tu_cats_above_title');
function tu_cats_above_title()
{
	if (is_home() || is_archive()) {
		$categories_list = get_the_category_list(_x(', ', 'Used between list items, there is a space after the comma.', 'generatepress'));
		if ($categories_list) {
			printf(
				'<span class="entry-meta cat-links"><span class="screen-reader-text">%1$s </span>%2$s</span>',
				_x('Categories', 'Used before category names.', 'generatepress'),
				$categories_list
			);
		}
	}
}

// functions.php
// prioritetize pagination over displaying custom post type content
add_action('init', function () {
	add_rewrite_rule('(.?.+?)/page/?([0-9]{1,})/?$', 'index.php?pagename=$matches[1]&paged=$matches[2]', 'top');
});

//tweak the meta on posts
//   add_filter( 'generate_post_author_output', 'tu_add_author_gravatar');
//   function tu_add_author_gravatar() {
// 	  printf( ' <span class="byline adam">%1$s</span>',
// 		  sprintf( '<span class="author vcard" itemtype="http://schema.org/Person" itemscope="itemscope" itemprop="author">%1$s %5$s<a class="url fn n" href="%2$s" title="%3$s" rel="author" itemprop="url"><span class="author-name" itemprop="name">%4$s</span></a></span>',
// 			  __( 'by','generatepress'),
// 			  esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
// 			  esc_attr( sprintf( __( 'View all posts by %s', 'generatepress' ), get_the_author() ) ),
// 			  esc_html( get_the_author() ),
// 			  get_avatar( get_the_author_meta( 'ID' ) )
// 		  )
// 	  );
//   }
add_filter('generate_post_date_output', 'tu_author_in_front_of_date', 10, 3);
function tu_author_in_front_of_date($date, $time_string)
{
	$author = sprintf(
		' <div class="byline">%1$s</div>', // WPCS: XSS ok, sanitization ok.
		sprintf(
			'<span class="author vcard" itemtype="https://schema.org/Person" itemscope="itemscope" itemprop="author"><span class="author-av" data-background="%5$s">&nbsp;</span><a class="author-url" href="%2$s" title="%3$s" rel="author" itemprop="url"><span class="author-name" itemprop="name">%4$s</span></a></span>',
			__('by', 'generatepress'),
			esc_url(get_author_posts_url(get_the_author_meta('ID'))),
			/* translators: 1: Author name */
			esc_attr(sprintf(__('View all posts by %s', 'generatepress'), get_the_author())),
			esc_html(get_the_author()),
			get_avatar_url(get_the_author_meta('ID'))
		)
	);

	$date = sprintf('<span class="posted-on">%s</span>', $time_string);

	return $author . $date;
}
//default avatar
add_filter('avatar_defaults', 'wpb_new_gravatar');
function wpb_new_gravatar($avatar_defaults)
{
	$myavatar = 'https://www.invicta.agency/wp-content/uploads/2019/10/site-icon.png';
	$avatar_defaults[$myavatar] = "Default Gravatar";
	return $avatar_defaults;
}

function crunchify_social_sharing_buttons($content)
{
	global $post;
	if (is_single() || is_home()) {

		// Get current page URL
		$crunchifyURL = urlencode(get_permalink());

		// Get current page title
		$crunchifyTitle = htmlspecialchars(urlencode(html_entity_decode(get_the_title(), ENT_COMPAT, 'UTF-8')), ENT_COMPAT, 'UTF-8');
		// $crunchifyTitle = str_replace( ' ', '%20', get_the_title());

		// Get Post Thumbnail for pinterest
		$crunchifyThumbnail = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full');

		// Construct sharing URL without using any script
		$twitterURL = 'https://twitter.com/intent/tweet?text=' . $crunchifyTitle . '&amp;url=' . $crunchifyURL . '&amp;via=Crunchify';
		$facebookURL = 'https://www.facebook.com/sharer/sharer.php?u=' . $crunchifyURL;
		$googleURL = 'https://plus.google.com/share?url=' . $crunchifyURL;
		$bufferURL = 'https://bufferapp.com/add?url=' . $crunchifyURL . '&amp;text=' . $crunchifyTitle;
		$linkedInURL = 'https://www.linkedin.com/shareArticle?mini=true&url=' . $crunchifyURL . '&amp;title=' . $crunchifyTitle;

		// Based on popular demand added Pinterest too
		$pinterestURL = 'https://pinterest.com/pin/create/button/?url=' . $crunchifyURL . '&amp;media=' . $crunchifyThumbnail[0] . '&amp;description=' . $crunchifyTitle;

		// Add sharing button at the end of page/page content
		$content .= '<!-- Implement your own superfast social sharing buttons without any JavaScript loading. No plugin required. Detailed steps here: http://crunchify.me/1VIxAsz -->';
		$content .= '<div class="crunchify-social">';
		$content .= '<h5>Enjoyed this article? Share on</h5> <a class="crunchify-link crunchify-twitter" href="' . $twitterURL . '" target="_blank">Twitter</a>';
		$content .= '<a class="crunchify-link crunchify-facebook" href="' . $facebookURL . '" target="_blank">Facebook</a>';
		$content .= '<a class="crunchify-link crunchify-googleplus" href="' . $googleURL . '" target="_blank">Google+</a>';
		$content .= '<a class="crunchify-link crunchify-buffer" href="' . $bufferURL . '" target="_blank">Buffer</a>';
		$content .= '<a class="crunchify-link crunchify-linkedin" href="' . $linkedInURL . '" target="_blank">LinkedIn</a>';
		$content .= '<a class="crunchify-link crunchify-pinterest" href="' . $pinterestURL . '" data-pin-custom="true" target="_blank">Pin It</a>';
		$content .= '</div>';

		return $content;
	} else {
		// if not a post/page then don't include sharing button
		return $content;
	}
};
add_filter('the_content', 'crunchify_social_sharing_buttons');

//Front-End Login
// function redirect_login_page()
// {

// 	$login_page  = home_url('/file-manager/');
// 	$page_viewed = basename($_SERVER['REQUEST_URI']);

// 	if ($page_viewed == "wp-login.php" && $_SERVER['REQUEST_METHOD'] == 'GET') {
// 		wp_redirect($login_page);
// 		exit;
// 	}
// }
// // add_action('init', 'redirect_login_page');

// function login_failed()
// {

// 	$login_page  = home_url('/file-manager/');
// 	wp_redirect($login_page . '?user-login=failed');
// 	exit;
// }
// add_action('wp_login_failed', 'login_failed');

// function verify_username_password($user, $username, $password)
// {

// 	$login_page  = home_url('/file-manager/');
// 	if ($username == "" || $password == "") {
// 		wp_redirect($login_page . "?user-login=empty");
// 		exit;
// 	}
// }
// add_filter('authenticate', 'verify_username_password', 1, 3);

// function logout_page()
// {

// 	$login_page  = home_url('/file-manager/');
// 	wp_redirect($login_page . "?user-login=false");
// 	exit;
// }
// add_action('wp_logout', 'logout_page');
