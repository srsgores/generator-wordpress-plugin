=== <%= _.slugify(name) %> ===
Contributors: <%= authorGitHub %>
Donate link: <%= authorURL %>
Tags: comments, spam
Requires at least: 3.5.1
Tested up to: 3.6
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

<%= description %>

== Description ==

<%= description %> (Longer description here)

== Installation ==

1. Upload `<%= _.slugify(name).php %>` to the `/wp-content/plugins/` directory
1. Activate the plugin through the "Plugins" menu in WordPress
1. Place `<?php do_action("<%= safePluginName %>_hook"); ?>` in your templates

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 1.0 =
* Initial Commit