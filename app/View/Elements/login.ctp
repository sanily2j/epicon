<!-- login panel -->
                                    <div class="login-form-container" id="loginform">
                                        <h4><strong class="epicon-strong">Login</strong> to your Account</h4>
                                        <form action="<?php echo FULL_BASE_URL . $this->base; ?>/user/login" role="form" id="UserLoginForm" method="post" accept-charset="utf-8">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="icon-user"></i></span>
                                                <input type="text" placeholder="Enter your Name" name="data[User][email]" type="email" class="form-control">
                                            </div>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="icon-lock"></i></span>
                                                <input type="password" name="data[User][password]" type="password" placeholder="Enter your Password" class="form-control">
                                            </div>
                                            <div class="input-group">
                                                <div class="checkbox">
                                                    <label>
                                                        <div class="checkbox_flat">
                                                            <input type="checkbox" value="option1" id="checkbox" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: none repeat scroll 0% 0% rgb(255, 255, 255); border: 0px none; opacity: 0;"></ins>
                                                        </div>Remember me
                                                    </label>
                                                </div>
                                            </div>

                                            <div class="input-group">
                                                <button class="button button-block" type="submit">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- login panel end here -->