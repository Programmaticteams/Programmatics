# Segmentation Fault 11 - DOCUMENTATION

<br/>
<br/>

  #### [Note]
 `Segmentation Fault 11 is a work in progress. As such, this documentation might not reflect 100% of Segmentation Fault 11's features at any given time.`


<br/>
<br/>
<br/>



## Commands (Not Slash-Commands)
 ```Prefix: ";"``` 

<br/>
<br/>

### Compile:
Currently, only support for C++ is available, although the compiler can run on all versions of C++ above C++98. The compiler does NOT support additional arguments like `-Wall` or `-fforce-mem` . Additionally, programs that require user input or have graphics are not supported either, and programs will automatically default to runtime error once they surpase 20000ms runtime. 

<br/>

Usage: ```;compile [version] [codeblock or .cpp file]```
<br/>
Example ````;compile c++20 ```#include <iostream> int main(){return 0;}``` ````

<br/>
<br/>

### Python

Currently, only support for python3 is available. And as with the C++ compiler, programs that require user input or have graphics are not supported. Packages/Libraries are also not supported. Programs will default to runtime error after 20000ms

<br/>

Usage: ```;python3 [codeblock or .py file]```
<br/>
Example: ````;python3 ```print("hello world")``` ````


<br/>
<br/>

### Delete
Deletes the past x messages.

<br/>

Usage: ```;delete [whole number]```
<br/>
Examplel: ```;delete 5```



<br/>
<br/>
<br/>

## Commands (Slash-Commands)

### /define

Returns an embed with definitions of the word that is being asked to define

<br/>

Usage: ```/define [word]```


<br/>
<br/>

### /ping

This is used mainly for debugging purposes. Run /ping and the bot will return pong.

<br/>

Usage: ```/ping```

<br/>
<br/>

### /poll

Returns your poll question with an up arrow reaction and a down arrow reaction, used for voting.

<br/>

Usage: ```/poll [question]```

<br/>
<br/>

### /programming-humor

Returns a programming meme. **[WARNING]: returns are not filtered**

<br/>

Usage: ```/programming-humor```

<br/>
<br/>

### /meme

Returns a meme from Reddit. **[WARNING]: returns are not filtered**

<br/>

Usage: ```/meme```


<br/>
<br/>

### /spongebobify

Randomly capitalizes characters inside your input.

<br/>


Usage: ```/spongebobify [message]```

<br/>
<br/>

### /wikipedia

Returns the introduction and article link of the article associated with a searched term or phrase.

<br/>

Usage: ```/wikipedia [search term/phrase]```