<div class="container-fluid">   
<h3 class="heading">Customers</h3>
<table id="getCustomers" class="display" cellspacing="0" width="100%">
    <thead>
    <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>        
        <th>Phone</th>
        <th>Email</th>
        <th>Created</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>

    </tbody>
</table>
    </div>
<?php echo $this->Html->script(array('Customer/customers')); ?>