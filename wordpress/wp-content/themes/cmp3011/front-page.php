<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package cmp3011
 */

get_header(); ?>


		<section class="graphic_box">
			<a href="pole.html">

				<img src="<?php echo get_template_directory_uri() ?>/images/pole_button.png" alt="polebutton" class="pole_button">
			</a>
			<a href="aerial.html">
				<img src="<?php echo get_template_directory_uri() ?>/images/aerial_graphic.png" alt="aerialbutton" class="aerial_button"></a>
			<a href="alternative.html" alt="alternative Fitness" class="alt_fit">
				<img src="<?php echo get_template_directory_uri() ?>/images/yoga_graphic.png" class="alt_button"></a>
		</section>

		<section class="summary">
			<p>At LOVE Pole Fitness<br/> our goal is to offer a safe, comfortable, and above all, fun exercise environment. We invite you to let down your hair and get a total body work out!</p>
		</section>
		<section class="studio_img">
			<img src="<?php echo get_template_directory_uri() ?>/images/studio_image1.jpg" alt="class photo" class="studio_img"></a>
			<p><br/>
				<br/><br/><br/><br/><br/><br/><br/></p>

		</section>



<?php

get_footer();
