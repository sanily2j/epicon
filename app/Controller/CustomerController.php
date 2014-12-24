<?php

App::uses('AppController', 'Controller');

Class CustomerController extends AppController {

    public $name = 'Customer';
    public $uses = array('User', 'Aro', 'Role', 'Customer', 'Group');
    public $helpers = array('Session');
    public $components = array('Session');
    public $uploadDir = 'images';

    public function beforeFilter() {
        parent::beforeFilter();
        // $this->Auth->allow(array('add','logout','rebuildARO'));
    }

    public function add() {
        if ($this->request->is('post')) {
            $this->request->data['Customer']['status'] = 1;
            $this->request->data['Customer']['created_by'] = $this->Session->read('User.user_id');

            if ($this->Customer->save($this->request->data)) {

                if (!empty($this->request->data['Customer']['photo']['tmp_name'])) {
                    
                }
                if (!is_uploaded_file($this->request->data['Customer']['photo']['tmp_name'])) {
                    return FALSE;
                }
                $filename = WWW_ROOT . $this->uploadDir . DS .
                        $this->Customer->id . '_' . Inflector::slug(pathinfo($this->request->data['Customer']['photo']['name'], PATHINFO_FILENAME)) . '.' . pathinfo($this->request->data['Customer']['photo']['name'], PATHINFO_EXTENSION);

                $photo_id = WWW_ROOT . $this->uploadDir . DS .
                        $this->Customer->id . '_' . Inflector::slug(pathinfo($this->request->data['Customer']['photo_id']['name'], PATHINFO_FILENAME)) . '.' . pathinfo($this->request->data['Customer']['photo_id']['name'], PATHINFO_EXTENSION);
                if (!move_uploaded_file($this->request->data['Customer']['photo']['tmp_name'], $filename)) {
                    return FALSE;
                    // file successfully uploaded
                }
                if (!move_uploaded_file($this->request->data['Customer']['photo_id']['tmp_name'], $photo_id)) {
                    return FALSE;
                    // file successfully uploaded
                }

                $update = array();
                $update['Customer']['photo_name'] = $this->Customer->id . '_' . Inflector::slug(pathinfo($this->request->data['Customer']['photo']['name'], PATHINFO_FILENAME)) . '.' . pathinfo($this->request->data['Customer']['photo']['name'], PATHINFO_EXTENSION);
                $update['Customer']['photo_id_name'] = $this->Customer->id . '_' . Inflector::slug(pathinfo($this->request->data['Customer']['photo_id']['name'], PATHINFO_FILENAME)) . '.' . pathinfo($this->request->data['Customer']['photo_id']['name'], PATHINFO_EXTENSION);
                $update['Customer']['id'] = $this->Customer->id;
                $this->Customer->save($update);

                $msg['success'] = 1;
                $msg['message'] = 'Customer has been saved';
                $this->redirect('/customer/add?type=success');
            } else {
                $msg['success'] = 0;
                $msg['message'] = 'System Error';
            }

            
        }
        $this->set('message',isset($_REQUEST['type']) ?$_REQUEST['type'] :'');
    }

    public function doProcess() {
        $this->autoRender = false;
        $this->layout = null;
        echo '<pre>';
        print_r($this->data);
        exit;

        $this->request->data['Customer']['status'] = 1;
        $this->request->data['Customer']['created_by'] = $this->Session->read('User.user_id');
        if ($this->Customer->save($this->request->data)) {
            $msg['success'] = 1;
            $msg['message'] = 'Customer has been saved';
        } else {
            $msg['success'] = 0;
            $msg['message'] = 'System Error';
        }

        $this->set(compact('msg'));
        $this->render("/Elements/json_messages");
    }
    
    public function customers()
    {
        
    }


    public function getAjaxData()
    {
        $this->autoRender = false;
        $data = $this->Customer->getAllCustomers();
        echo json_encode($data);
    }

}
