# Purpose
Micro app to watch subscriber, views, and video counts for a particular youtube channel.

# Channel ID
You can get a channel ID by visiting a channel. Here is an example:  
https://www.youtube.com/channel/UCWjmAUHmajb1-eo5WKk_22A  
"UCWjmAUHmajb1-eo5WKk_22A" would be the channel ID

# Starting
You will first need to add a Google API key credentials to server/youtube_api.js.  
You can simply rename or copy server/youtube_api_example.js and update the key variable.  
See: https://console.developers.google.com/apis/credentials  

Install any needed packages:  
npm i  
  
Build the client:  
npm run build  
  
To run the server:  
npm run server (default is localhost:3000)  
 
# Technologies
- NodeJS
- Express
- React
- TypeScript
- Axios

# Known issues
The YouTube API sometimes returns rounded off results for channels with a high amount of subscribers.
