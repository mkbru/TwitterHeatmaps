# Generating Twitter Heatmaps using ELK Stack and NodeJS
This is a "How To" on generating a live heat-map of tweets sent within the U.S.A using the ELK Stack(Elasticsearch,Logstash,Kibana) and NodeJS.
See below for the screenshot of the final product of this guide.

# Directory Structure:
  
  /Documents
  <br/>
  |--    /elasticsearch
  <br/>
  |&nbsp;&nbsp;&nbsp;   | -- /bin
  <br/>
  |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | -- elasticsearch.bat
  <br/>
  |--    /kibana
  <br/>
  |&nbsp;&nbsp;&nbsp;   | -- /bin
  <br/>
  |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | -- kibana.bat
  <br/>
  |--    /logstash
  <br/>
  |&nbsp;&nbsp;&nbsp;   | -- /bin
  <br/>
  |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | -- logstash.bat
  <br/>
  |--    /filebeats
  <br/>
  |&nbsp;&nbsp;&nbsp;   | -- filebeat.exe
  <br/>
  |&nbsp;&nbsp;&nbsp;   | -- filebeat.yml
  <br/>
  |
  <br/>
  |--    /TwitterHeatmaps
  <br/>
  |&nbsp;&nbsp;&nbsp;   | -- server.js
  <br/>
  |&nbsp;&nbsp;&nbsp;   | -- nodetwit.conf
  <br/>
  |&nbsp;&nbsp;&nbsp;   | -- filebeat.yml

# Getting Started:

### Prerequisites

### Installing

  - [x] [Download and unzip Elasticsearch](https://www.elastic.co/downloads/elasticsearch)
  
  - [x] [Download and unzip Kibana](https://www.elastic.co/downloads/kibana)
  
  - [x] [Download and unzip Logstash](https://www.elastic.co/downloads/logstash)
  
  - [x] [Download and unzip Filebeat](https://www.elastic.co/downloads/beats/filebeat)
  
  - [x] [Download NodeJS](https://nodejs.org/en/download/)
  
  - [x] Clone this Repo!! -> https://github.com/mikebrusilov/TwitterHeatmaps.git
  
  - [x] [Create a Twitter Application (follow this guide)](http://docs.inboundnow.com/guide/create-twitter-application/)
  
  - [x] [Java 8 is required!!!](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)
  
 ## Deployment
 
  1. ### <b>Replace the ./filebeat->filebeat.yml with [filebeat.yml](https://github.com/mikebrusilov/TwitterHeatmaps/blob/master/filebeat.yml)</b>
  
  2. ### Update the server.js file with your Twitter API credentials:
  
  ```var T = new Twit({
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  '',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
```

3. ### Open 4 Powershell terminals, run the following commands: 
    
   - <b>C:\\:</b> `.\Documents\elasticsearch-5.6.2\bin\elasticsearch`
   - <b>C:\\:</b> `.\Documents\kibana-5.6.3-windows-x86\bin\kibana.bat`
   - <b>C:\\:</b> `.\Documents\logstash-5.6.3\bin\logstash -f .\Documents\TwitterHeatmaps\nodetwit.conf`
   - <b>C:\\:</b> `.\Documents\filebeat-5.6.4-windows-x86_64\filebeat.exe -e -c .\Documents\filebeat-5.6.4-windows-x86_64\filebeat.yml`

4. ### Configure the Index in Kibana:

* Go to `<localhost:5601>` in your browser 

* Click "Management" 

* Enter 'twittermaps' as the index pattern

* Click "Create"
    

![alt text](https://github.com/mikebrusilov/TwitterHeatmaps/blob/master/CreateIndexPatter.PNG)

5. ### Create the object in Elasticsearch: 

* Click "Dev Tools" 
* Paste the JSON object in the console,highlight the code,click "Play"


```
PUT twittermaps
{
  "mappings": {
    "locality": {
      "properties": {
          "location": {
          "type": "geo_point"
          }
      }
    }
  }
}


```

![alt text](https://github.com/mikebrusilov/TwitterHeatmaps/blob/master/CreateESObject.PNG)

6. ### Open a new Terminal or Powershell Window, Go to the TwitterHeatmaps Directory and run: `node server.js`

7. ### In Kibana, click "Discover". You should be able to see the logs input.

* Under "Available Fields" hover over "location" and click "Add"
* Once "location" is added to "Selected Fields" click "Visualize" (We are almost there!!!)

![alt text](https://github.com/mikebrusilov/TwitterHeatmaps/blob/master/GeoLocationField.PNG)

8. ### Visualize:

* In the "Options" select "Map Type" heatmap
* Click "Play", you should see a heatmap appear
* You can save this visualization and add it to a Dashboard.
* Your visualization should look like the one below:

![alt text](https://github.com/mikebrusilov/TwitterHeatmaps/blob/master/HeatMap.PNG)

# The End.


