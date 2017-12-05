# Generating Twitter Heatmaps using ELK Stack and NodeJS
How to generate a live heat-map of tweets sent within the U.S.A using the ELK Stack(Elasticsearch,Logstash,Kibana) and NodeJS.

# Directory Structure
  
  /Documents
  <br/>
  |--    elasticsearch
  <br/>
  |
  <br/>
  |--    kibana
  <br/>
  |
  <br/>
  |--    logstash
  <br/>
  |
  <br/>
  |--    filebeats
  <br/>
  |&nbsp;&nbsp;&nbsp;   | -- filebeat.yml
  <br/>
  |
  <br/>
  |--    TwitterHeatmaps

# Getting Started:

### Prerequisites

### Installing

  - [x] [Download and unzip Elasticsearch](https://www.elastic.co/downloads/elasticsearch)
  
  - [x] [Download and unzip Kibana](https://www.elastic.co/downloads/kibana)
  
  - [x] [Download and unzip Logstash](https://www.elastic.co/downloads/logstash)
  
  - [x] [Download and unzip Filebeat](https://www.elastic.co/downloads/beats/filebeat)
  
  - [x] [Download NodeJS](https://nodejs.org/en/download/)
  
  - [x] Clone this Repo!!
  
  - [x] [Create a Twitter Application (follow this guide)](http://docs.inboundnow.com/guide/create-twitter-application/)
  
 ## Deployment
 
  1. ### !!Replace the filebeat.yml in the filebeats directory with [filebeat.yml](https://github.com/mikebrusilov/TwitterHeatmaps/blob/master/filebeat.yml)
  
  2. ### Update the server.js file with your Twitter API credentials
  
  ```var T = new Twit({
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  '',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
```

3. ### Open 4 terminal OR powershell windows
    
   - <b>C:\\:</b> `.\Documents\elasticsearch-5.6.2\bin\elasticsearch`
   - <b>C:\\:</b> `.\Documents\kibana-5.6.3-windows-x86\bin\kibana.bat`
   - <b>C:\\:</b> `.\Documents\logstash-5.6.3\bin\logstash -f .\Documents\node_twitter\nodetwit.conf`
   - <b>C:\\:</b> `.\Documents\filebeat-5.6.4-windows-x86_64\filebeat.exe -e -c .\Documents\filebeat-5.6.4-windows-x86_64\filebeat.yml`

4. ### Configure the Index in Kibana

* Go to `<localhost:5601>` in your browser 

* Click "Management" 

* Enter 'twittermaps' as the index pattern

* Click "Create"
    

![alt text](https://github.com/mikebrusilov/TwitterHeatmaps/blob/master/CreateIndexPatter.PNG)

5. ## Create the object in Elasticsearch 

* Click "Dev Tools" 

```PUT twittermaps
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
* Paste the JSON object in the console,highlight the code,click "Play"

![alt text](https://github.com/mikebrusilov/TwitterHeatmaps/blob/master/CreateESObject.PNG)

6. ## Open a new Terminal or Powershell Window, Go to the TwitterHeatmaps Directory and run: `node server.js`

7. 




