<?php
/**
 * <%= name %>
 *
 * <%= description %>
 *
 * @package   <% _.slugify(name) %>
 * @author    <%= authorName %> <<%= authorEmail %>>
 * @license   GPL-2.0+
 * @link      <%= authorURL %>
 * @copyright <%= currentDate %> <%= authorCompanyName %>
 *
 * @wordpress-plugin
 * Plugin Name: <%= name %>
 * Plugin URI:  <%= authorURL %>
 * Description: <%= description %>
 * Version:     1.0.0
 * Author:      <%= authorName %>
 * Author URI:  <%= authorURL %>
 * Text Domain: <%= safePluginName %>-locale
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path: /lang
 */

// If this file is called directly, abort.
if ( ! defined( "WPINC" ) ) {
	die;
}

require_once( plugin_dir_path( __FILE__ ) . "<% _.camelize(name) %>.php" );

// Register hooks that are fired when the plugin is activated, deactivated, and uninstalled, respectively.
register_activation_hook( __FILE__, array( "<% _.camelize(name) %>", "activate" ) );
register_deactivation_hook( __FILE__, array( "<% _.camelize(name) %>", "deactivate" ) );

// TODO: replace Plugin_Name with the name of the plugin defined in `class-plugin-name.php`
<% _.camelize(name) %>::get_instance();