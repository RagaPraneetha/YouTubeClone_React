import {React,useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos,ChannelCard} from './';
import { fetchFromAPI } from '../utils/FetchFromAPI';


const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  console.log(channelDetail,videos);
  

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) =>setChannelDetail(data?.items[0]));  
  
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) =>setVideos(data?.items));  
  
  
  }, [id])
  return (
    <Box minHeight='95vh'>
    <Box>
      <div style={{backgroundColor: "#00DBDE",backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
      zIndex:10,height:'200px'}}></div>
      <ChannelCard channelDetail={channelDetail} marginTop= "-160px"/>
    </Box>
    <Box  p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
    </Box>
   
    </Box>
  )
}

export default ChannelDetail