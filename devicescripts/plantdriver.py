import time
from threading import Thread
from time import sleep
import mysql.connector
from dht11 import DHT11
from relay import Relay
from watersensor import WaterSensor


def databaseUpdate():
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
        
    year, month, day, hour, minute = time.strftime("%Y,%m,%d,%H,%M").split(',')
    print("\rLast DB update: %s"%month + "/" + "%s %s"%(day, hour) + ":" + "%s"%minute)
    
    sleep(60)
    
humiditySensorOne = DHT11(17)
humiditySensorTwo = DHT11(22)
humiditySensorThree = DHT11(27)
waterSensor = WaterSensor()
light = Relay(15)
light.on()
water = Relay(14)

devices = [humiditySensorOne, humiditySensorTwo, humiditySensorThree, waterSensor, light, water]
print("\n")
while True:
    Thread(target=databaseUpdate).start()
    year, month, day, hour, minute = time.strftime("%Y,%m,%d,%H,%M").split(',')
    hour = int(hour)
    if (hour > 2) and (hour < 22):
        if not light.active:
            light.on()
    else:
        if light.active:
            light.off()
    sleep(60)
    
        
    