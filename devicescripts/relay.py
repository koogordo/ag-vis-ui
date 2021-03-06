import RPi.GPIO as GPIO
from time import sleep

LOWER_BOUND = 0
UPPER_BOUND = 180

class Relay:

    #self._var   Protected variable
    #self.__var  Private variable
    def __init__(self, pin):
        
        self._active = False
        self._pin = pin
        self._type = 'relay'
        
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self._pin, GPIO.OUT)
        self.off()
        
    @property
    def active(self):
        return self._active
        
    @property
    def pin(self):
        return self._pin
    
    @property
    def type(self):
        return self._type
        
    @property
    def active(self):
        return self._active
    
    def off(self):

        try:
            GPIO.output(self._pin, 1)
            self._active = False
            
        except Exception as e:
            self._active = None
            print "There was an error turning off the relay\n\t" + str(e)
            
    def on(self, duration=None):

        try:
            if not duration:
                GPIO.output(self._pin, 0)
                self._active = True
            else:
                if duration > LOWER_BOUND and duration < UPPER_BOUND:
                    self.on()
                    sleep(duration)
                    self.off()
                else:
                    print("Time is out of range [%s,%s]. Found %s"%(LOWER_BOUND,UPPER_BOUND,duration))
            
        except Exception as e:
            self._active = None
            print "There was an error turning on the relay\n\t" + str(e)