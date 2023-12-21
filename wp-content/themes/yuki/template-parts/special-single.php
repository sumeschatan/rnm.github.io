<?php
/**
 * The template part for single post.
 *
 * @package Yuki
 */

use LottaFramework\Facades\CZ;
use LottaFramework\Utils;

$layout          = 'no-sidebar';
$container_style = 'boxed';

$post_sidebar   = yuki_get_current_post_meta( 'site-sidebar-layout' );
$post_container = yuki_get_current_post_meta( 'site-container-style' );

if ( $post_sidebar && $post_sidebar !== 'default' ) {
	$layout = $post_sidebar;
} else if ( CZ::checked( 'yuki_post_sidebar_section' ) ) {
	$layout = CZ::get( 'yuki_post_sidebar_layout' );
}

if ( $post_container && $post_container !== 'default' ) {
	$container_style = $post_container;
} else {
	$container_style = CZ::get( 'yuki_single_post_container_style' );
}

?>

<?php
/**
 * Hook - yuki_action_before_single_post_container.
 */
do_action( 'yuki_action_before_single_post_container' );
?>

<div class="<?php Utils::the_clsx( yuki_container_css( $layout, $container_style ) ) ?>">
    <div id="content" class="flex-grow max-w-full">
		<?php
		// posts loop
		while ( have_posts() ) {
			the_post();

			/**
			 * Hook - yuki_action_before_single_post.
			 */
			do_action( 'yuki_action_before_single_post' );

			/**
			 * Hook - yuki_action_single_post.
			 */
			do_action( 'yuki_action_single_post' );

			/**
			 * Hook - yuki_action_after_single_post.
			 */
			do_action( 'yuki_action_after_single_post' );
		}
		?>
    </div>

	<?php
	/**
	 * Hook - yuki_action_sidebar.
	 */
	do_action( 'yuki_action_sidebar', $layout );
	?>
</div>

