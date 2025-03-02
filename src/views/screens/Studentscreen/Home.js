import { SafeAreaView, ScrollView, StyleSheet, Pressable, Text, View, Dimensions, useWindowDimensions, TouchableOpacity, Keyboard, Alert,Image, RefreshControl} from 'react-native'
import React, { useState } from 'react';
import Logo from '../../../../assets/bg/Picture2.png';
import Logo1 from '../../../../assets/bg/profile2.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Searchbar from '../../components/Searchbar';
import OptionsMenu from "react-native-option-menu";
import Universalstyles from "../../../const/Universalstyle";
import { axiosRequest,server} from '../../components/api';
import moment from 'moment'

//with mysql database using php for backend

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Home = ({navigation}) => {

  const [gets,setGet] = React.useState({
    post : []
   })
   const [search,setSearch] = React.useState({
    post : []
   })

const [id,setId] = React.useState()



  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  const {width} = useWindowDimensions();
  const [value,setValue] = useState();
  function updateSearch(text){
      setValue(text)
    axiosRequest.post('/api/search.php',JSON.stringify({search:text})).then((response)=>{
     console.log(response.data)
      setSearch (prevState => ({...prevState, post: response.data}))
           
      })
  }

  
 



  

const [postID,setPostID] = React.useState()


React.useEffect(()=>{
 const refresh = navigation.addListener('focus',async () => {
  
 await axiosRequest.get('auth/post/view/home').then((response)=>{
     
setGet (prevState => ({...prevState, post: response.data}))
     
})

}


  )
return refresh
},[])

  const myIcon = (<Icon name='dots-horizontal' size={30} color="black "/>)
const report = () => Alert.alert(
    "", 
    "Are you sure you want to report this post?",
    [
      {
        text: "Yes",
        onPress: () => console.log("Yes Pressed"),
        style: "yes"
      },
      { 
        text: "No", onPress: () => console.log("No Pressed")
      }
    ]
  );
  
  
  
  return (

<SafeAreaView style={{flex: 1}}>
<View style={{padding: 10, flexDirection: 'row', backgroundColor: '#F5E44C' }}>

  
    <Image source={Logo} style={{
      width: 45,
      height: 40,
      resizeMode: 'center',
      marginRight: 7
    }} />
  

  <Searchbar 
    IconName='search-web'
    placeholder='Search job'
    onChange = {text => updateSearch(text)}
    updateSearch={updateSearch}
    />

  <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
    <Icon
      name="bell"
      style={{ fontSize: 40, marginLeft: 5, color: 'black', }} />
  </TouchableOpacity>
</View>
<ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          width: Dimensions.get('window').width,
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#F5E44C']}
          />
        }  
      >
        <>
{value ? search.post.map((label,index)=>(
<View key = {index} style={[Universalstyles.jobPost,{}]}>
  
    <View style={Universalstyles.jobContent}>
      
    {label.profile  ? <Image source={{uri:server+label.profile}} style={Universalstyles.Jobimage}/>
     : <Image source={Logo1} style={Universalstyles.Jobimage}/>} 
    

    <View style={Universalstyles.jobContent2}>
    <View style={{flex: 1,  flexDirection: 'row' ,alignSelf: 'flex-end', left: 5, bottom: 5}}>
    <OptionsMenu
    key={label.postID}
  customButton={myIcon}
  options={["Report", "Cancel"]}
  actions={[report]}
  
 // onPress = {()=>setId(()=>{label.postID})}
  
  

  />

    </View>
    <Text style={{fontSize: 20, borderBottomWidth: 1, marginBottom: 5, borderColor: '#cbc8ce'}}><Icon2 name='person' style={{fontSize: 23, color: 'grey',}}/>  {label.lookingfor}</Text>
    {label.compname && <Text style={{opacity: .5}}><Icon name='warehouse' style={{fontSize: 20, color: 'blue',}}/> {label.compname}</Text>}
    <Text style={{opacity: .5 }}><Icon name='map-marker' style={{fontSize: 20, color: 'blue', }}/> {label.street}, {label.city}, {label.province}, {label.zipcode}</Text>
    <Text style={{opacity: .5 }}><Icon name='briefcase-outline' style={{fontSize: 20, color: 'blue', }}/> {label.jobtype}</Text>   
    <Text style={{opacity: .5 }}><Icon name='clock-outline' style={{fontSize: 20, color: 'black', }}/> {moment(label.createdat).add(8,'hour').startOf('seconds').fromNow()}</Text>

    
   {label.status == 'open' &&  <TouchableOpacity onPress={()=>{
     setPostID(label.postID)
        navigation.navigate('Job description', { itemId : label.postID, title : label.lookingfor})
    }
    }>
      <View style={[Universalstyles.jobContent3, {}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
          VIEW
      </Text>
      </View>
      </TouchableOpacity>}
      {label.status == 'close' &&  <TouchableOpacity disabled = {true} onPress={()=>{
     setPostID(label.postID)
        navigation.navigate('Job description', { itemId : label.postID, title : label.lookingfor})
    }
    }>
      <View style={[Universalstyles.jobContent3, {backgroundColor:"red"}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
      Application is Now Closed
      </Text>
      </View>
      </TouchableOpacity>}
    </View>
    </View>
  
    </View>
    
    )): gets.post.map((label,index)=>(
<View key = {index} style={[Universalstyles.jobPost,{}]}>
  
    <View style={Universalstyles.jobContent}>
      
    {label.profile[0].profile  ? <Image source={{uri:label.profile[0].profile}} style={Universalstyles.Jobimage}/>
     : <Image source={Logo1} style={Universalstyles.Jobimage}/>} 
    

    <View style={Universalstyles.jobContent2}>
    <View style={{flex: 1,  flexDirection: 'row' ,alignSelf: 'flex-end', left: 5, bottom: 5}}>
    <OptionsMenu
    key={label.id}
  customButton={myIcon}
  options={["Report", "Cancel"]}
  actions={[report]}
  
 // onPress = {()=>setId(()=>{label.postID})}
  
  

  />

    </View>
    <Text style={{fontSize: 20, borderBottomWidth: 1, marginBottom: 5, borderColor: '#cbc8ce'}}><Icon2 name='person' style={{fontSize: 23, color: 'grey',}}/>  {label.looking_for}</Text>
    {label.company && <Text style={{opacity: .5}}><Icon name='warehouse' style={{fontSize: 20, color: 'blue',}}/> {label.company[0].comp_name}</Text>}
    <Text style={{opacity: .5 }}><Icon name='map-marker' style={{fontSize: 20, color: 'blue', }}/> {label.street}, {label.city}, {label.province}, {label.zipcode}</Text>
    <Text style={{opacity: .5 }}><Icon name='briefcase-outline' style={{fontSize: 20, color: 'blue', }}/> {label.job_type}</Text>   
    <Text style={{opacity: .5 }}><Icon name='clock-outline' style={{fontSize: 20, color: 'black', }}/> {moment(label.created_at).startOf('seconds').fromNow()}</Text>
    <Text style={{opacity:.5}}> <Icon2 name='person' style={{fontSize:15, color: 'brown', alignContent: 'center'}}/> <Text style={{color: 'black', }}> {label.applies.length} </Text> People applied</Text>
  

    
   {label.status == 'open' &&  <TouchableOpacity onPress={()=>{
     setPostID(label.postID)
        navigation.navigate('Job description', { post:label})
    }
    }>
      <View style={[Universalstyles.jobContent3, {}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
          VIEW
      </Text>
      </View>
      </TouchableOpacity>}
      {label.status == 'close' &&  <TouchableOpacity disabled = {true} onPress={()=>{
     setPostID(label.postID)
        navigation.navigate('Job description', { itemId : label.postID, title : label.lookingfor})
    }
    }>
      <View style={[Universalstyles.jobContent3, {backgroundColor:"red"}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
      Application is Now Closed
      </Text>
      </View>
      </TouchableOpacity>}
    </View>
    </View>
  
    </View>
    
    ))}
    </>
 
  </ScrollView>
  
  </SafeAreaView>
  
  
  );

}

export default Home
