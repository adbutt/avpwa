<?php
// Register Custom Post Type Files
// Post Type Key: file
// Register Custom Post Type File
// Register Custom Post Type File
function create_file_cpt()
{

	$labels = array(
		'name' => _x('Files', 'Post Type General Name', 'textdomain'),
		'singular_name' => _x('File', 'Post Type Singular Name', 'textdomain'),
		'menu_name' => _x('Files', 'Admin Menu text', 'textdomain'),
		'name_admin_bar' => _x('File', 'Add New on Toolbar', 'textdomain'),
		'archives' => __('File Archives', 'textdomain'),
		'attributes' => __('File Attributes', 'textdomain'),
		'parent_item_colon' => __('Parent File:', 'textdomain'),
		'all_items' => __('All Files', 'textdomain'),
		'add_new_item' => __('Add New File', 'textdomain'),
		'add_new' => __('Add New', 'textdomain'),
		'new_item' => __('New File', 'textdomain'),
		'edit_item' => __('Edit File', 'textdomain'),
		'update_item' => __('Update File', 'textdomain'),
		'view_item' => __('View File', 'textdomain'),
		'view_items' => __('View Files', 'textdomain'),
		'search_items' => __('Search File', 'textdomain'),
		'not_found' => __('Not found', 'textdomain'),
		'not_found_in_trash' => __('Not found in Trash', 'textdomain'),
		'featured_image' => __('Featured Image', 'textdomain'),
		'set_featured_image' => __('Set featured image', 'textdomain'),
		'remove_featured_image' => __('Remove featured image', 'textdomain'),
		'use_featured_image' => __('Use as featured image', 'textdomain'),
		'insert_into_item' => __('Insert into File', 'textdomain'),
		'uploaded_to_this_item' => __('Uploaded to this File', 'textdomain'),
		'items_list' => __('Files list', 'textdomain'),
		'items_list_navigation' => __('Files list navigation', 'textdomain'),
		'filter_items_list' => __('Filter Files list', 'textdomain'),
	);
	$args = array(
		'label' => __('File', 'textdomain'),
		'description' => __('', 'textdomain'),
		'labels' => $labels,
		'menu_icon' => 'dashicons-portfolio',
		'supports' => array('title'),
		'taxonomies' => array('folders', 'subfolders'),
		'public' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => true,
		'hierarchical' => false,
		'exclude_from_search' => false,
		'show_in_rest' => true,
		'publicly_queryable' => true,
		'capability_type' => 'post',
	);
	register_post_type('file', $args);
}
add_action('init', 'create_file_cpt', 0);

// Register Taxonomy Post Code
function create_folders_tax()
{

	$labels = array(
		'name'              => _x('Folders', 'taxonomy general name', 'invrestaurant'),
		'singular_name'     => _x('Folder', 'taxonomy singular name', 'invrestaurant'),
		'search_items'      => __('Search Folders', 'invrestaurant'),
		'all_items'         => __('All Folders', 'invrestaurant'),
		'parent_item'       => __('Parent Folder', 'invrestaurant'),
		'parent_item_colon' => __('Parent Folder:', 'invrestaurant'),
		'edit_item'         => __('Edit Folder', 'invrestaurant'),
		'update_item'       => __('Update Folder', 'invrestaurant'),
		'add_new_item'      => __('Add New Folder', 'invrestaurant'),
		'new_item_name'     => __('New Folder Name', 'invrestaurant'),
		'menu_name'         => __('Folder', 'invrestaurant'),
	);
	$args = array(
		'labels' => $labels,
		'description' => __('Folders Taxonomy', 'invrestaurant'),
		'hierarchical' => false,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'meta_box_cb' => false,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'show_tagcloud' => false,
		'show_in_quick_edit' => true,
		'show_admin_column' => false,
		'show_in_rest' => true,
	);
	register_taxonomy('folders', array('files'), $args);
}
add_action('init', 'create_folders_tax');

// Register Taxonomy Sub Folders
function create_subfolders_tax()
{

	$labels = array(
		'name'              => _x('Subfolders', 'taxonomy general name', 'invrestaurant'),
		'singular_name'     => _x('Subfolder', 'taxonomy singular name', 'invrestaurant'),
		'search_items'      => __('Search Subfolders', 'invrestaurant'),
		'all_items'         => __('All Subfolders', 'invrestaurant'),
		'parent_item'       => __('Parent Subfolder', 'invrestaurant'),
		'parent_item_colon' => __('Parent Subfolder:', 'invrestaurant'),
		'edit_item'         => __('Edit Subfolder', 'invrestaurant'),
		'update_item'       => __('Update Subfolder', 'invrestaurant'),
		'add_new_item'      => __('Add New Subfolder', 'invrestaurant'),
		'new_item_name'     => __('New Subfolder Name', 'invrestaurant'),
		'menu_name'         => __('Subfolder', 'invrestaurant'),
	);
	$args = array(
		'labels' => $labels,
		'description' => __('Subfolder Taxonomy', 'invrestaurant'),
		'hierarchical' => false,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'show_tagcloud' => false,
		'show_in_quick_edit' => true,
		'meta_box_cb' => false,
		'show_admin_column' => false,
		'show_in_rest' => true,
	);
	register_taxonomy('subfolders', array('files'), $args);
}
add_action('init', 'create_subfolders_tax');
