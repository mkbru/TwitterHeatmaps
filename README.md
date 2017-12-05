# Generating Twitter Heatmaps using ELK Stack and NodeJS
How to generate a live heat-map of tweets sent within the U.S.A using the ELK Stack(Elasticsearch,Logstash,Kibana) and NodeJS.

Getting Started:

  1. ### [Download and unzip Elasticsearch](https://www.elastic.co/downloads/elasticsearch)
  
  2. ### [Download and unzip Kibana](https://www.elastic.co/downloads/kibana)
  
  3. ### [Download and unzip Logstash](https://www.elastic.co/downloads/logstash)
  
  4. ### [Download and unzip Filebeat](https://www.elastic.co/downloads/beats/filebeat)
  
  5. ### [Download NodeJS](https://nodejs.org/en/download/)
  
  6. ### Clone this Repo!!
  
  7. ### [Create a Twitter Application (follow this guide)](http://docs.inboundnow.com/guide/create-twitter-application/)
  
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
  
  8. ### !!Replace the filebeat.yml in the filebeats directory with [filebeat.yml](https://github.com/mikebrusilov/TwitterHeatmaps/blob/master/filebeat.yml)
  
  9. ### Update the server.js file with your Twitter API credentials
  
  ```var T = new Twit({
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  '',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
```

10. ### Open 4 terminal/powershell windows

  




