<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u620619464_MQ8Va' );

/** Database username */
define( 'DB_USER', 'u620619464_ykMF8' );

/** Database password */
define( 'DB_PASSWORD', 'aN7oq8oheS' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'C/%/P*G3T4|7v^dNu4x0d(7r]9%1W1wb|<#0R]{+GX-51tM.I1y<oFbsdvW3fQqM' );
define( 'SECURE_AUTH_KEY',   'F048-1VUlB#!V~.W3XC^[H;(N26N*)%2;j,O>EH1f_FJ=!30EI)_?`s/o:xNnP#Q' );
define( 'LOGGED_IN_KEY',     'x##if%Pyx=_Ie<n*ij.@s5Fr3aRS9*8ay-h/2!uXk{RvRM;~J kPe{MOSQ3_Ztt&' );
define( 'NONCE_KEY',         ':{FgZE6.rx6G;8l]N,V3+0?~1b7WPwB~NCKR5rY#acKL`.`TnQaukomd/LWm=hI!' );
define( 'AUTH_SALT',         'bleT3+;bY{}.MW^QtXV(9h2TI Ki D*`LV2WZ?=(!W_$elfF$9VP]qu[#Dl.pUi^' );
define( 'SECURE_AUTH_SALT',  '->)c*yu5PTb#_S*#W>:/5,iATIE[ 6 `onY[Vod[bwkj5z5%DLJreoBZo]}IS0!!' );
define( 'LOGGED_IN_SALT',    '7u_eCV>E387%Etv6N^gx-;FoZ);R#cYtGfMhVS3h!4v cBmw{lgTLrAXiU>2AA(E' );
define( 'NONCE_SALT',        'LEj5yM}Q<V+#S-6tssb#Zh)NwIUihol;mm[;VLWBtz>Ia@RiO>V&?~#?B>9c]S!7' );
define( 'WP_CACHE_KEY_SALT', 'fEIk~O:DQO39y11GrfU_XDcCxuDIyJ#tlJij /XBQ! #.}_Lz*!&ch<%;Tcps6BW' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
