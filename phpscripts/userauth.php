<?php
    // User Auth Lib
    require_once 'users/init.php';  //make sure this path is correct!
    require_once $abs_us_root.$us_url_root.'users/includes/header.php';
    require_once $abs_us_root.$us_url_root.'users/includes/navigation.php';
    

    function loggedOn($user)
    {
        if(isset($user))
        {   
            if($user->isLoggedIn())
            {
                // Do something if authenticated
                return true;
            }
            else
            {
                echo "Not logged in.";
                return false;
            }
        }
        else
        {
            echo "user not set.";
            return false;
        }
    }
?>