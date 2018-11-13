import serial

class WaterSensor:

    #self._var   Protected variable
    #self.__var  Private variable
    def __init__(self):
        
        self._data = self.sense()
        self._type = 'watersensor'        
        
    @property
    def data(self):
        return self._data
        
    @property
    def type(self):
        return self._type        
    
    def sense(self):

        try:
            ser = serial.Serial('/dev/ttyUSB0', 9600, 8, 'N', 1, timeout=5)            
            self._data = ser.readline()
            return self._data
            
        except Exception as e:
            self._data = None
            print "There was an error reading the water sensor from an arduino\n\t" + str(e)
            
   
