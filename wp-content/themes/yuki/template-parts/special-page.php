<?php
/**
 * The template part for pages.
 *
 * @package Yuki
 */

use LottaFramework\Facades\CZ;
use LottaFramework\Utils;

$layout          = 'no-sidebar';
$container_style = 'boxed';

$page_sidebar   = yuki_get_current_post_meta( 'site-sidebar-layout' );
$page_container = yuki_get_current_post_meta( 'site-container-style' );

if ( $page_sidebar && $page_sidebar !== 'default' ) {
	$layout = $page_sidebar;
} else if ( ( ! is_front_page() || is_home() ) && CZ::checked( 'yuki_page_sidebar_section' ) ) {
	$layout = CZ::get( 'yuki_page_sidebar_layout' );
}

if ( $page_container && $page_container !== 'default' ) {
	$container_style = $page_container;
} else {
	$container_style = CZ::get( 'yuki_pages_container_style' );
}

?>

<?php
/**
 * Hook - yuki_action_before_page_container.
 */
do_action( 'yuki_action_before_page_container' );
?>

<div class="<?php Utils::the_clsx( yuki_container_css( $layout, $container_style ) ) ?>">
    <div id="content" class="flex-grow max-w-full">
		<?php
		// posts loop
		while ( have_posts() ) {
			the_post();

			/**
			 * Hook - yuki_action_before_page.
			 */
			do_action( 'yuki_action_before_page' );

			/**
			 * Hook - yuki_action_page.
			 */
			do_action( 'yuki_action_page' );

			/**
			 * Hook - yuki_action_after_page.
			 */
			do_action( 'yuki_action_after_page' );
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

