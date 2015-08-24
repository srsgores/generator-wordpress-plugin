<?php
/**
 * <%= name %>
 *
 * <%= description %>
 *
 * @package   <%= safePluginName %>
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
if (!defined("WPINC")) {
	die;
}

require_once(plugin_dir_path(__FILE__) . "<%= camelizePlugname %>.php");

// Register hooks that are fired when the plugin is activated, deactivated, and uninstalled, respectively.
register_activation_hook(__FILE__, array("<%= camelizePlugname %>", "activate"));
register_deactivation_hook(__FILE__, array("<%= camelizePlugname %>", "deactivate"));

<%= camelizePlugname %>::get_instance();
