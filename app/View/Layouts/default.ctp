<?php
/**
 *
 * PHP 5
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
?>
<!DOCTYPE html>
<html>
    <head>
	<?php echo $this->Html->charset(); ?>
        <title>
            Epicon
        </title>
    <?php echo $this->Html->css(array('normalize', 'animate',
                                    'whhg','dataTables.bootstrap',
                                    'foundstrap',
                                    'fancybox',
                                    'easy-responsive-tabs','smartmenu','style','main','epicon-responsive')); ?>
          
          
<?php
  echo $this->Html->script(array('jquery','common','jquery.validate','plugins','jquery.fancybox','easyResponsiveTabs','jquery.fancybox-media',
      'jquery.waypoints.min','jquery.smartmenus.min','jquery.scrollUp','jquery.cookie','icheck','main','vendor/modernizr-2.6.2.min'));      
?>
         <script type="text/javascript" language="javascript" src="//cdn.datatables.net/1.10.4/js/jquery.dataTables.min.js"></script>
        <!-- Bootstrap DataTables JavaScript -->
        <script type="text/javascript" language="javascript" src="//cdn.datatables.net/plug-ins/9dcbecd42ad/integration/bootstrap/3/dataTables.bootstrap.js"></script>
          </head>
    <body>
        <div class="wrapper">
            
       
      <header>
                <div class="row">
                    <div class="large-12 column">
                        <div class="header-info">
                            <ul class="left-info no-bullet inline-list">
                                <li><i class="icon-phonealt"></i> 1400-333-222</li>
                                <li><i class="icon-envelope"></i> hello@epicon.web.id</li>
                            </ul>
                            <ul class="right-info no-bullet inline-list">
                                <li class="search-container">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="icon-search"></i></span>
                                        <input type="text" placeholder="search something..." class="form-control search-input">
                                    </div>
                                </li>
                                <li class="login-container">
                                    <a href="#loginform" id="loginpopup" class="login"><i class="icon-enter"></i> login</a>
                                    <?php echo $this->element('login');?>
                                </li>
                            </ul>
                        </div>

                        <div class="header-container">
                            <div class="logo-container">
                                <a href="index.html">
                                    <img alt="Epicon Logo" src="img/logo.png" class="retina">epicon
                                </a>
                            </div>



                            <div class="social-icon social-header" style="display: none;">
                                <ul class="no-bullet inline-list">
                                    <li><a href="#"><i class="socicon-facebook"></i></a>
                                    </li>
                                    <li><a href="#"><i class="socicon-twitter"></i></a>
                                    </li>
                                    <li><a href="#"><i class="socicon-instagram"></i></a>
                                    </li>
                                    <li><a href="#"><i class="socicon-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>

                            <!-- menu navigation -->
                            <nav class="menu-container" style="display: block;">
                                <ul class="sm epicon-menu" id="menu" data-smartmenus-id="14190967579164656">
                                    <li class="active"><a href="index.html" class="has-submenu active"><span class="sub-arrow"></span>Home</a>
                                        <ul>
                                            <li><a href="index-hosting.html">Home - Hosting</a>
                                            </li>
                                            <li><a href="index-hotel.html">Home - Hotel</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#" class="has-submenu"><span class="sub-arrow"></span>Pages</a>
                                        <ul>
                                            <li><a href="about.html">About Us</a>
                                            </li>
                                            <li><a href="services.html">Services</a>
                                            </li>
                                            <li><a href="testimonials.html">Testimonials</a>
                                            </li>
                                            <li><a href="pricing-plan.html">Pricing Plan</a>
                                            </li>
                                            <li><a href="team.html">Our Team</a>
                                            </li>
                                            <li><a href="single.html">Blog Post</a>
                                            </li>
                                            <li><a href="portfolio-single.html">Portfolio Single</a>
                                            </li>
                                            <li><a href="faq.html">FAQ Page</a>
                                            </li>
                                            <li><a href="sitemap.html">Sitemap</a>
                                            </li>
                                            <li><a href="404.html">404 Error</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#" class="has-submenu"><span class="sub-arrow"></span>Shortcode</a>
                                        <ul>
                                            <li><a href="column.html">Column</a>
                                            </li>
                                            <li><a href="button-list.html">Button &amp; List</a>
                                            </li>
                                            <li><a href="icon-list.html">Icon List</a>
                                            </li>
                                            <li><a href="icon-use.html">Icon use</a>
                                            </li>
                                            <li><a href="typography.html">Typography</a>
                                            </li>
                                            <li><a href="table.html">Table</a>
                                            </li>
                                            <li><a href="panel-promo.html">Panel &amp; Promobox</a>
                                            </li>
                                            <li><a href="tab-accordion.html">Tab &amp; Accordion</a>
                                            </li>
                                            <li><a href="alert-progress.html">Alert &amp; Progress</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#" class="has-submenu"><span class="sub-arrow"></span>Portfolio</a>
                                        <ul>
                                            <li><a href="portfolio-2column.html">Portfolio 2 Column</a>
                                            </li>
                                            <li><a href="portfolio-3column.html">Portfolio 3 Column</a>
                                            </li>
                                            <li><a href="portfolio-4column.html">Portfolio 4 Column</a>
                                            </li>
                                            <li><a href="#" class="has-submenu"><span class="sub-arrow"></span>Dropdown Level 1</a>
                                                <ul>
                                                    <li><a href="#">Dropdown Level 2</a>
                                                    </li>
                                                    <li><a href="#">Dropdown Level 2</a>
                                                    </li>
                                                    <li><a href="#" class="has-submenu"><span class="sub-arrow"></span>Dropdown Level 2</a>
                                                        <ul>
                                                            <li><a href="#">Dropdown Level 3</a>
                                                            </li>
                                                            <li><a href="#">Dropdown Level 3</a>
                                                            </li>
                                                            <li><a href="#">Dropdown Level 3</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Blog</a>
                                    </li>
                                    <li><a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        <section class="content container">
            <div id="customFlash" class="jssuccessMessage top_success" style="display: none"></div>
            <div class="row-fluid">
			<?php echo $this->Session->flash(); ?>

			<?php echo $this->fetch('content'); ?>
            </div>
    <!--        <p><strong>Your are using CakePHP Version <?=Configure::version()?></strong></p>-->
        </section>
        
        <script type="text/javascript">
            var baseUrl = '<?php echo FULL_BASE_URL . $this->base; ?>';
        </script>

        <!-- jQuery DataTables JavaScript -->

        <div class="modal hide" id="README">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3>README</h3>
            </div>

        </div>
         </div>
        
    </body>
</html>