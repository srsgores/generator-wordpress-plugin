<?php
/**
 * Fired when the plugin is uninstalled.
 *
 * @package   <%= safePluginName %>
 * @author    <%= authorName %> <<%= authorEmail %>>
 * @license   GPL-2.0+
 * @link      <%= authorURL %>
 * @copyright <%= currentDate %> <%= authorCompanyName %>
 */

// If uninstall, not called from WordPress, then exit
if (!defined("WP_UNINSTALL_PLUGIN")) {
	exit;
}

// TODO: Define uninstall functionality here
