<?php

App::uses('AppController', 'Controller');

Class UserController extends AppController {

    public $name = 'User';
    public $uses = array('User','Aro','Role','People','Group');
    public $helpers = array('Session');
    public $components = array('Session');

    public function beforeFilter() {
        parent::beforeFilter();
        // $this->Auth->allow(array('add','logout','rebuildARO'));
    }

    public function rebuildARO() {
        // Build the groups.
        $roles = $this->Role->find('all');
        $aro = new Aro();
        foreach ($roles as $role) {
            $aro->create();
            $aro->save(array(
                // 'alias'=>$group['Group']['name'],
                'foreign_key' => $role['Role']['id'],
                'model' => 'Role',
                'parent_id' => null
            ));
        }

        // Build the users.
        $this->User->recursive = -1;
        $users = $this->User->find('all');

        $i = 0;
        foreach ($users as $user) {
            $aroList[$i++] = array(
                // 'alias' => $user['User']['email'],
                'foreign_key' => $user['User']['id'],
                'model' => 'User',
                'parent_id' => $user['User']['role_id']
            );
        }
        foreach ($aroList as $data) {
            $aro->create();
            $aro->save($data);
        }

        echo "AROs rebuilt!";
        exit;
    }

    public function add() {

        $data = array();
        $data['User']['email'] = 'superadmin@mail.com';
        $data['User']['password'] = $this->generatePassword();
        $data['User']['created'] = gmdate("Y-m-d H:i:s");
        $data['User']['modified'] = gmdate("Y-m-d H:i:s");
        $data['User']['role_id'] = 1;
        echo '<pre>';
        print_r($data);
        $this->User->recursive = -1;
        $this->User->save($data);
        var_dump($this->User->save($data['User']));
        echo "User Created";
        exit;
    }

    private function generatePassword($password_length = "8") {
        srand($this->make_seed());

        // get proper alfa from confiugre
        $alfa = Configure::read("passwordAlfa");
        
        $token = "";

        for ($i = 0; $i < $password_length; $i++) {
            $token .= $alfa[rand(0, strlen($alfa) - 1)];
        }
        
        return $token;
    }

    /**
     * generate secret string
     * 
     * @return type 
     */
    private function make_seed() {
        list($usec, $sec) = explode(' ', microtime());
        return (float) $sec + ((float) $usec * 100000);
    }
    
   
    
   
    
    public function getUsers()
    {
        
    }
    
    
    
    public function doRegisterUser()
    {
        
        
    }

    public function login() {
        // Disabling the browser cache for this page so that user cannot go back to login page by clicking the back button.
        $this->response->disableCache();
        
        if( $this->Session->read('User.user_id')) {
            $this->redirect('/');
            exit;
        }
        if ($this->request->is('post')) {

            if ($this->User->validates()) {

                $userAllData = $this->User->getUserData($this->request->data['User']['email'], 
                        '', 
                        trim(Security::hash(Configure::read('Security.salt') . trim($this->request->data['User']['password']))));
             
                if ($this->Auth->login($userAllData['User'])) {
                    $cookie['email'] = $userAllData['User']['email'];
                    $cookie['password'] = $userAllData['User']['password'];
                    $this->setCakeSession($userAllData);
                    $this->Cookie->write('Auth.User', $cookie, true, '+2 weeks');
                    if ( $this->Session->read('User.role_id') == 2) {
                        $this->redirect($this->Auth->redirect('/'));
                    } else {
                       
                        $this->redirect($this->Auth->redirect('/customer/add'));
                    }
                }
                
                $this->Session->setFlash(__('Invalid username or password, try again'), 'default', array(), 'authlogin');
            }
        }
    }

    public function logout() {
      
        $this->Session->destroy();
        $this->Cookie->delete('Auth.User');

        $this->redirect('/user/login');
    }
    
    public function delete()
    {
        $this->autoRender = false;
        $id = $_REQUEST['id'];
        $this->User->recursive = -1;
        if ($this->User->delete(array('id' =>$id)) ) {
            $msg['success'] = 1;
            $msg['message'] = 'User has been deleted';
        } else {
            $msg['success'] = 0;
            $msg['message'] = 'System Error, Please try again';
        }
        
        $this->set(compact('msg'));
        $this->render("/Elements/json_messages");
    }
    
    /**
     * function to set session data
     * 
     * @param type $userAllData 
     * 
     * @return null
     */
    private function setCakeSession($userAllData = array()) {
        $this->Session->write('User.user_id', $userAllData['User']['id']);
         $this->Session->write('User.first_name', $userAllData['User']['first_name']);
        $this->Session->write('User.last_name', $userAllData['User']['last_name']);
        $this->Session->write('User.role_id', !empty($userAllData['User']['role_id']) ? $userAllData['User']['role_id'] : '');
        $this->Session->write('User.email', !empty($userAllData['User']['email']) ? $userAllData['User']['email'] : '');
        $this->Session->write('User.gender', !empty($userAllData['User']['gender']) ? $userAllData['User']['gender'] : '');
         $this->Session->write('User.phone_number', !empty($userAllData['User']['phone_number']) ? $userAllData['User']['phone_number'] : '');
         $this->Session->write('User.martial_status', !empty($userAllData['People']['martial_status']) ? $userAllData['People']['martial_status'] : '');
         $this->Session->write('User.surname_now', !empty($userAllData['People']['surname_now']) ? $userAllData['People']['surname_now'] : '');
         $this->Session->write('User.surname_dob', !empty($userAllData['People']['maiden_surname']) ? $userAllData['People']['maiden_surname'] : '');
          $this->Session->write('User.state', !empty($userAllData['People']['state']) ? $userAllData['People']['state'] : '');
           $this->Session->write('User.village', !empty($userAllData['People']['village']) ? $userAllData['People']['village'] : '');
           $this->Session->write('User.education', !empty($userAllData['People']['education']) ? $userAllData['People']['education'] : '');
           $this->Session->write('User.blood_group', !empty($userAllData['People']['blood_group']) ? $userAllData['People']['blood_group'] : '');
    }
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

