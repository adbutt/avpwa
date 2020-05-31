<?php

/**
 * Functions to extend the WP Rest API
 *
 * @package WordPress
 */

/**
 * Register custom fields for GET requests.
 *
 * Ref: https://developer.wordpress.org/reference/functions/register_rest_field/
 */
function invicta_extend_api_response()
{

	register_rest_field(
		array('post', 'file'), // post types.
		'vue_meta', // name of the new key.
		array(
			'get_callback' => 'vue_get_post_meta_fields',
			'update_callback' => null,
			'schema' => null,
		)
	);
}

/**
 * GET callback for the "vue_meta" field defined above.
 *
 * @param array $post_object Details of the current post.
 * @param string $field_name Field Name set in register_rest_field().
 * @param WP_REST_Request $request Current request.
 *
 * @return mixed
 */
function vue_get_post_meta_fields($post_object)
{

	// make additional fields available in the response using an associative array.
	$additional_post_data = array();
	// $terms = array();
	// $term_links = array();

	$post_id = $post_object['id']; // get the post id.
	// foreach ($post_object['categories'] as $category_id) {
	// 	$term_data = get_category($category_id);
	// 	$term_name = $term_data->category_nicename;
	// 	$term_url = get_term_link($term_data->name, $term_data->taxonomy);
	// 	$term_link = "<a href=\"$term_url\">$term_name</a>";

	// 	array_push($terms, $term_name);
	// 	array_push($term_links, $term_link);
	// }
	// add categories, custom excerpt, featured image to the api response.
	$description = get_field('description', $post_id);
	$file = get_field('file_upload', $post_id);
	$folders = wp_get_post_terms($post_id, 'folders', array("fields" => "names"));
	$subfolders = wp_get_post_terms($post_id, 'subfolders', array("fields" => "names"));
	// $pcodes = implode(", ", $postcodes);
	$additional_post_data = array(
		'description' => $description,
		'file' => $file,
		'folders' => $folders,
		'subfolders' => $subfolders
	);

	// return data to the get_callback.
	// this data will be made available in the key "vue_meta".
	return $additional_post_data;
}
