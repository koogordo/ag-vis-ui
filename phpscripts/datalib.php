<?php

    // Returns sensor table in an array
    function getAllSensorData()
    {
        include('phpscripts/connect.php');

        try
        {
            $currentData = Array();
            $stmt = $pdo->query('SELECT * FROM sensor');
            while ($row = $stmt->fetch())
            {
                array_push($currentData, $row);
            }
        }
        catch (Exception $e)
        {
            echo 'Error: ' . $e->getMessage() . "\n";
        }
        
        return $currentData;
    }
    
    function getLastReading($sensorType=null, $clientid=null, $clientSite=null)
    {
        include('phpscripts/connect.php');
        
        try
        {  
            $stmt = $pdo->prepare("SELECT * FROM sensor WHERE 
                time=(SELECT MAX(time) AS time FROM sensor WHERE type='" . $sensorType . "' AND clientid='" . $clientid . "' AND clientsite='" . $clientSite . "')
                AND type='" . $sensorType . "'
                AND clientid='" . $clientid . "'
                AND clientsite='" . $clientSite . "';");
            $currentData = Array();
            
            /*
            $stmt = $pdo->prepare("SELECT * FROM sensor WHERE
                                    type='" . $sensorType . "'
                                    AND clientid='" . $clientid . "'
                                    AND clientsite='" . $clientSite . "';");
            */

            $stmt->execute();
            
            while ($row = $stmt->fetch())
            {
                array_push($currentData, $row);
            }            
        }
        catch (Exception $e)
        {
            echo 'Error: ' . $e->getMessage() . "\n";
        }
        return $currentData;
    }
    
    function getLastHour($sensorType=null, $clientid=null, $clientSite=null)
    {
        include('phpscripts/connect.php');
        
        try
        {  
        
            $stmt = $pdo->prepare("SELECT * FROM sensor WHERE 
                time BETWEEN 
                    ((SELECT MAX(time) AS time FROM sensor) - (60*60))
                    AND 
                    (SELECT MAX(time) AS time FROM sensor)
                AND type='" . $sensorType . "'
                AND clientid='" . $clientid . "'
                AND clientsite='" . $clientSite . "';");
            $currentData = Array();
            
            /*
            $stmt = $pdo->prepare("SELECT * FROM sensor WHERE
                                    type='" . $sensorType . "'
                                    AND clientid='" . $clientid . "'
                                    AND clientsite='" . $clientSite . "';");
            */

            $stmt->execute();
            
            while ($row = $stmt->fetch())
            {
                array_push($currentData, $row);
            }            
        }
        catch (Exception $e)
        {
            echo 'Error: ' . $e->getMessage() . "\n";
        }
        return $currentData;
    }
    
    function getLastDay($sensorType=null, $clientid=null, $clientSite=null)
    {
        include('phpscripts/connect.php');
        
        try
        {  
        
            $stmt = $pdo->prepare("SELECT * FROM sensor WHERE 
                time BETWEEN 
                    ((SELECT MAX(time) AS time FROM sensor) - 86400)
                    AND 
                    (SELECT MAX(time) AS time FROM sensor)
                AND type='" . $sensorType . "'
                AND clientid='" . $clientid . "'
                AND clientsite='" . $clientSite . "';");
            $currentData = Array();
            
            /*
            $stmt = $pdo->prepare("SELECT * FROM sensor WHERE
                                    type='" . $sensorType . "'
                                    AND clientid='" . $clientid . "'
                                    AND clientsite='" . $clientSite . "';");
            */

            $stmt->execute();
            
            while ($row = $stmt->fetch())
            {
                array_push($currentData, $row);
            }            
        }
        catch (Exception $e)
        {
            echo 'Error: ' . $e->getMessage() . "\n";
        }
        return $currentData;
    }

    function getLastMonth($sensorType=null, $clientid=null, $clientSite=null)
    {
        include('phpscripts/connect.php');
        
        try
        {  
        
            $stmt = $pdo->prepare("SELECT * FROM sensor WHERE 
                time BETWEEN 
                    ((SELECT MAX(time) AS time FROM sensor) - (30 * 86400))
                    AND 
                    (SELECT MAX(time) AS time FROM sensor)
                AND type='" . $sensorType . "'
                AND clientid='" . $clientid . "'
                AND clientsite='" . $clientSite . "';");
            $currentData = Array();
            
            /*
            $stmt = $pdo->prepare("SELECT * FROM sensor WHERE
                                    type='" . $sensorType . "'
                                    AND clientid='" . $clientid . "'
                                    AND clientsite='" . $clientSite . "';");
            */

            $stmt->execute();
            
            while ($row = $stmt->fetch())
            {
                array_push($currentData, $row);
            }            
        }
        catch (Exception $e)
        {
            echo 'Error: ' . $e->getMessage() . "\n";
        }
        return $currentData;
    }
        
?>
  