<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Jg9{svSso@>&K-9I${an$Uu:<^E :Vx:F;j~k_Z{%_daz?x9Xeq<aBQ8GL,cwI-O');
define('SECURE_AUTH_KEY',  '@x:V#%t?/HyS7w#rQc=/JqzSJ|VH=[)Wt,t{2-R0~U&S>swIlY=4gdR=6W1 R^xu');
define('LOGGED_IN_KEY',    '[o{W14a)r}cWRMGH&^h$E6m|8q7,*ZjL}sUQ0cF>d7?IZzcH;SR->UA_Lj{Is}5<');
define('NONCE_KEY',        'k$g1dMV!hf:DB`~utG.m(Ozv^XNlCcXuHnm/bOclE.0VEmv nv7Jjvl/|aN-Bk{H');
define('AUTH_SALT',        'j=+x8PM{.PHz|d[lz`(^T9UGo!Md0/Z@V7xRPaNcw(w]$UDP5Tv>I}~y`?>y<P;l');
define('SECURE_AUTH_SALT', 'iVr PeT[OPS;8a-_SBR4k?^o7dvyAvL,;8?XQ33n_Q%C@~{F)?WB1<Hi=?RcOM5s');
define('LOGGED_IN_SALT',   '5O=e.En}|PSgy~,{~k]/<ri3#@@&;}kmfPj|w-d72%}m@:i;%RAj$7jeX{1BMFD_');
define('NONCE_SALT',       '(AVOEGNh!zFEjd{{!Pv=X?-I<]~f5#33.!&]d5/Q~~4N0Ca&,VVdZz~>mh)+9)R^');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
