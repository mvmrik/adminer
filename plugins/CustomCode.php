<?php

/**
 * Faster tables filter plugin
 * ===========================
 * Useful when there's way too many tables than it shoud be and Adminer Tables Filter is slow
 *
 * @author Martin Macko, https://github.com/linkedlist
 * @license http://http://opensource.org/licenses/MIT, The MIT License (MIT)
 *
 * Modified 201802 - updated for Adminer 4.6.0 compatibility
 */
class CustomCode
{
	function head()
	{ ?>

<script src='/assets/custom.js' <?php echo nonce(); ?>></script>
<link rel="stylesheet" type="text/css" href="assets/custom.css">

<?php return true;
	}
} ?>