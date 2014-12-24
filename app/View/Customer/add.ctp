<section class="content container">
    <div class="row">
        <div id="top-tab" class="top-tab resp-tabs-top" style="display: block; width: 100%; margin: 0px;">
            <!-- tab list -->
            <ul class="resp-tabs-list">
                <li class="resp-tab-item resp-tab-active" aria-controls="tab_item-0" role="tab"><i class="icon-briefcase"></i> Add New Customer </li>
                <li class="resp-tab-item" aria-controls="tab_item-1" role="tab"><i class="icon-calculator"></i> Delete Customer</li>
                <li class="resp-tab-item" aria-controls="tab_item-2" role="tab"><i class="icon-stickynote"></i> Old Customers</li>
            </ul>

            <!-- tab container -->
            <div class="resp-tabs-container">
                <h4 role="tab" class="resp-accordion resp-tab-active" aria-controls="tab_item-0"><span class="resp-arrow"></span><i class="icon-briefcase"></i> Sample 1</h4>
                <div class="resp-tab-content resp-tab-content-active" aria-labelledby="tab_item-0" style="display:block">
                    <div class="row">
                        <div data-animate="fadeInDown" class="large-6 medium-6 medium-potrait-12 small-12 column no-padding epic-animate animated fadeInDown" style="">
                            <div id="add-customer-form" class="inner-column">
                                
                <?php echo $this->Form->create('Customer', array('type'=>'file','class' => 'contact-form clearfix addForm', 'id' => 'addCustomer', 'name' => 'add')); ?>

                                    <div style="display: <?php echo $message ? 'show' : 'none';?>;" class="alert-box green success-contact">
                                        <i class="icon-circleselect"></i>
                                        <?php echo $message?>
                                    </div>

                                    <div class="input-group large-12 column">                        
                                        <span class="input-group-addon"><i class="icon-user"></i></span>
                           <?php echo $this->Form->input('first_name', array('id' => 'first_name', 'placeholder' => 'Enter First Name' ,'title' => '','div' => false, 'label' => false, 'class' => 'form-control')); ?>
                                    </div>

                                    <div class="input-group large-12 column">
                                        <span class="input-group-addon"><i class="icon-envelope"></i></span>
                           <?php echo $this->Form->input('last_name', array('id' => 'last_name', 'placeholder' => 'Enter Last Name' ,'title' => '','div' => false, 'label' => false, 'class' => 'form-control')); ?>
                                    </div>
                                    <div class="input-group large-12 column">
                                        <span class="input-group-addon"><i class="icon-envelope"></i></span>
                           <?php echo $this->Form->input('phone', array('id' => 'phone', 'placeholder' => 'Enter Phone Name' ,'title' => '','div' => false, 'label' => false, 'class' => 'form-control')); ?>
                                    </div>
                                    <div class="input-group large-12 column">
                                        <span class="input-group-addon"><i class="icon-mailinglists"></i></span>
                          <?php echo $this->Form->input('home_address', array('id' => 'home_address', 'placeholder' => 'Enter Home address' ,'title' => '','div' => false, 'label' => false, 'class' => 'form-control')); ?>
                                    </div>

                                    <div class="input-group large-12 column">
                                        <span class="input-group-addon"><i class="icon-mailinglists"></i></span>
                          <?php echo $this->Form->input('business_address', array('id' => 'business_address', 'placeholder' => 'Enter Business address' ,'title' => '','div' => false, 'label' => false, 'class' => 'form-control')); ?>
                                    </div>
                                    <div class="input-group large-12 column">
                                        <span class="input-group-addon"><i class="icon-mailinglists"></i></span>
                          <?php echo $this->Form->input('email', array('id' => 'email', 'placeholder' => 'Enter Email address' ,'title' => '','div' => false, 'label' => false, 'class' => 'form-control')); ?>
                                    </div>
                                    <div class="input-group large-12 column">
                                        <span class="input-group-addon"><i class="icon-mailinglists"></i></span>
                         <?php echo $this->Form->input('photo',array('type' => 'file','label'=>'Photo')); ?>
                                    </div>
                                    <div class="input-group large-12 column">
                                        <span class="input-group-addon"><i class="icon-mailinglists"></i></span>
                         <?php echo $this->Form->input('photo_id',array('type' => 'file','label'=>'Photo ID')); ?>
                                    </div>
                                    <div class="form-group large-12 column">
                                        <button type="button" class="btn btn-primary saveButton">Submit</button>
                                        <span class="loading"></span>
                                    </div>
                    <?php echo $this->Form->end(); ?>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 role="tab" class="resp-accordion" aria-controls="tab_item-1"><span class="resp-arrow"></span><i class="icon-calculator"></i> Sample 2</h4><div class="resp-tab-content" aria-labelledby="tab_item-1">
                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem minima veniam quis nostrum exercitationem.
                    </p>
                </div>

                <h4 role="tab" class="resp-accordion" aria-controls="tab_item-2"><span class="resp-arrow"></span><i class="icon-stickynote"></i> Sample 3</h4><div class="resp-tab-content" aria-labelledby="tab_item-2">
                    <p>
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur molestias excepturi sint occaecati cupiditate non provident similique.
                    </p>
                </div>
            </div>
            <!-- end tab container -->
        </div>
    </div>
</section>
<?php echo $this->Html->script(array('Customer/add')); ?>