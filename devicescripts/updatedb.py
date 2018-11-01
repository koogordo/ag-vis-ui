import time
from time import sleep
import mysql.connector
from dht11 import DHT11
from relay import Relay

devices = [DHT11(22), Relay(4)]

while True:
    mydb = ''
    try:
        mydb = mysql.connector.connect(\
            host="localhost",\
            user="plantpi",\
            passwd="softwareengineering",\
            database="plantproject",\
            autocommit=True\
        )
    except Exception as e:
        print("Couldn't connect to db\n\t%s"%str(e))
        exit()
    cursor = mydb.cursor()

    for device in devices: 
    
    
        seconds = str(int(time.time()))
        data = None
        try:
            data = str(device.sense())
        except:
            data = "1" if(device.active) else "0"
        active = '0'
        try:
            active = "1" if(data) else "0"
        except:
            pass
        try:
            active = "1" if(device.active) else "0"
        except:
            pass
        deviceType = device.type

        statement =\
        "INSERT INTO sensor (time, value, active, type, clientid, clientsite)" + " " +\
        "VALUES ("+\
            "'" + seconds + "', " +\
            "'" + data + "', " +\
            "'" + active + "', " +\
            "'" + deviceType + "', " +\
            "'" + "11" + "', " +\
            "'" + "Winona" + "'" +\
        ");"
        
        #print(statement)   
        
        cursor.execute(statement)
        
    
    sleep(60)