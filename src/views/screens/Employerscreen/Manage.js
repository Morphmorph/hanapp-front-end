import React, {useState} from 'react';
import { View, useWindowDimensions, Dimensions, StyleSheet, Text, SafeAreaView, ScrollView, Image, Alert, TouchableOpacity} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Universalstyles from '../../../const/Universalstyle';
// import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from "expo-document-picker"
import Logo1 from '../../../../assets/bg/profile.png';
import Logo from './../../../../assets/bg/bgimage5.jpg'
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Fontisto';
import OptionsMenu from "react-native-option-menu";
import { axiosRequest, server } from '../../components/api';
import HTMLView from 'react-native-htmlview';


const myIcon = (<Icon3 name='dots-three-vertical' size={30} color="black " />)


//with mysql database using php for backend


// const closeIconAlert = () => Alert.alert(
//   "", 
//   "Are you sure you want to reject the applicant?",
//   [
//     {
//       text: "Yes",
//       onPress: () => console.log("Yes Pressed"),
//       style: "yes"
//     },
//     { 
//       text: "No", onPress: () => console.log("No Pressed")
//     }
//   ]
// );

const report = () => Alert.alert(
    "", 
    "Are you sure you want to report this applicant?",
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
  
  




      
  
const FirstRoute = ({navigation,arr}) => 


    <ScrollView style={{}}>
  
   
   
   <View >
   <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 5}}>
      <Text style={Universalstyles.text2}><Icon4 name='person' style={{fontSize: 25, color: 'black',}}/>  {arr.looking_for}</Text>
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 30}}>Company name:</Text>
      <Text style=style={Universalstyles.text}><Icon name='email' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Company email address: </Text> */}
     { arr.company && <Text style={Universalstyles.text}><Icon name='warehouse' style={{fontSize: 20, color: 'black', marginRight: 10}}/> {arr.company[0].comp_name}</Text>}
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5,}}><Icon name='map-marker' style={{fontSize: 20, color: 'black', }}/> Workplace address </Text> */}
      <Text style={Universalstyles.text}><Icon name='account' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> {arr.profile[0].last_name}, {arr.profile[0].first_name} {arr.profile[0].mid_name} {arr.profile[0].suff_name}</Text>
      <Text style={Universalstyles.text}><Icon name='map-marker' style={{fontSize: 20, color: 'red', marginRight: 10}}/> {arr.street}, {arr.city}, {arr.province}, {arr.zipcode}</Text>
      {/* <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Year company started: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Employees hired: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Number of customers serve: </Text> */}
    <Text style={Universalstyles.text}><Icon name='briefcase-outline' style={{fontSize: 20, color: 'black', }}/> {arr.job_type}</Text> 
    <Text style={Universalstyles.text}><Icon name='currency-php' style={{fontSize: 20, color: 'red', }}/> {arr.salary} {arr.rate} </Text>

      
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> Hiring start in:</Text> 
      <Text style={{ paddingHorizontal: 80, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='calendar-month' style={{fontSize: 20, color: 'red', marginRight: 10}}/> Hiring end on: </Text>
      </View>
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={{paddingHorizontal: 25, fontSize: 15, opacity:.5}}>{arr.start_date} </Text>
      <Text style={{paddingHorizontal: 100,fontSize: 15, opacity:.5}}>{arr.end_date}</Text>
      </View>
      <Text style={Universalstyles.text}></Text>
     </View>

    
    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500'}}>Job Description</Text>
    </View>
    <View style={{paddingHorizontal: 50,paddingVertical:20}}>
  {/* <Text style={{paddingBottom: 10, margin: 3, fontSize: 20, alignSelf: 'center', fontWeight: '500'}}> {label.jobdesc}
    </Text>*/}
    
    <HTMLView
    
    value = {arr.job_desc}
  />
    </View>
    </View>
   
    <View style={{marginTop: 15, marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
    <TouchableOpacity  onPress={() => navigation.navigate('Edit post',{post:arr})}>
    <View style={{borderColor: 'orange',
    alignSelf: 'center',
    width: 150,
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,}}>
      <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>Edit</Text>
      </View>
    </TouchableOpacity>
    </View>

    </View>
   </ScrollView>
 




 

const SecondRoute = ({navigation, profile,arr}) => (
  

<ScrollView style={{}}>
<View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 0, margin: 0}}>
    
    <View style={{paddingVertical: 10}}>
   {arr.map((label,index)=>( <View key = {index} style={{backgroundColor: 'white',
    borderColor: '#e8e8e8',
    padding: 5,
    borderWidth:  2,
    flexDirection: 'row',
    borderRadius: 5}}>
    
    
   {label.userdetails[0].profile ? <Image source={{uri:label.userdetails[0].profile}} style={{
      width: 70,
      height: 70,
      marginRight: 7,
      borderRadius: 35,
      alignSelf: 'center'
      
    }}/> :  <Image source={Logo1} style={{
      width: 70,
      height: 70,
      marginRight: 7,
      borderRadius: 35,
      alignSelf: 'center'
      
    }}/> }
    
    
    <View style={{flex:1,flexDirection:"row"}}>
    <View  style={{padding: 10,
    flex: 1,
    borderColor: '#e8e8e8',
    marginLeft: 0,
    flexDirection: 'column',
    justifyContent: 'space-evenly'}}>
      {/* map all this below line */}
    <Text style={{ marginBottom: 0, fontSize: 15}}>{label.userdetails[0].last_name}, {label.userdetails[0].first_name} {label.userdetails[0].mid_name} {label.userdetails[0].suff_name}<Text style={{color: 'blue', textTransform: 'capitalize'}}> </Text> </Text>
    <Text style={{ opacity: .5, fontSize: 12}}>{label.address[0].street} {label.address[0].city} {label.address[0].province} {label.address[0].zipcode} <Text style={{color: 'green', textTransform: 'capitalize'}}></Text> </Text>
    <Text style={{ opacity: .5}}>{label.userdetails[0].birthday}<Text style={{color: 'green', textTransform: 'capitalize'}}></Text> </Text>
        </View>
      
      <View style={{ flex: 1, flexDirection: 'row',position:"relative",flexDirection:"row",justifyContent:"flex-end" ,alignItems:"center"}}>
      
      
    
      <TouchableOpacity onPress={()=>Alert.alert(
  "", 
  "Are you sure you want to reject the applicant?",
  [
    {
      text: "Yes",
      onPress: () => {
        axiosRequest.post('api/applicant.php',JSON.stringify({applyID:label.aid,status:"Decline"})).then((response) => {
          Alert.alert(response.data,"Application Successfully Decline",
          [
      {
        text: "Okay!",
        onPress: () => navigation.goBack(),
        style: "yes"
      }
    ]
         )
            })
        },
      style: "yes"
    },
    { 
      text: "No", onPress: () => console.log("No Pressed")
    }
  ]
)}>
      <Icon2 name='closecircle' style={{fontSize: 30, color: 'red', marginHorizontal: 10}}/>
      </TouchableOpacity>
     
      
      <TouchableOpacity onPress={() => Alert.alert(
  "", 
  "Are you sure you want to Approved the applicant?",
  [
    {
      text: "Yes",
      onPress: () => {
        axiosRequest.post('api/applicant.php',JSON.stringify({applyID:label.aid,status:"Approved"})).then((response) => {
       
          Alert.alert(response.data,"Go to Applicant to Manage Approved Applicants",
            [
        {
          text: "Okay!",
          onPress: () => navigation.navigate('Applicant'),
          style: "yes"
        },{
          text:"Stay",
          onPress: ()=>navigation.goBack(),
          style:'cancel' 
        }
      ]
           ) 
            })
        },
      style: "yes"
    },
    { 
      text: "No", onPress: () => console.log("No Pressed")
    }
  ]
)}>
      <Icon2 name='checkcircle' style={{fontSize: 30, color: 'green', marginHorizontal: 10}}/>
      </TouchableOpacity>
      <OptionsMenu
      customButton={myIcon}
      options={["Profile", "Report", "Cancel"]}
      actions={[()=>navigation.navigate('Applicant profile',{
       profile:label
      }), report]}
      />
    {/*  <MenuProvider style = {{flex:1,justifyContent:"center",alignItems:"center",width:100}}>
            <Menu o renderer={renderers.Popover}
     rendererProps={{ placement: 'auto' }} style= {{height:80,width:100,flex:1,alignItems:"center",justifyContent:"center"}}>
  <MenuTrigger><Icon3 name='dots-three-vertical' size={30} color="black " />
  </MenuTrigger>
  <MenuOptions optionsContainerStyle={{ marginLeft:-15,width:300,position:"relative",top:5 }}>
    <MenuOption onSelect= {()=> navigation.navigate('Applicant profile',{itemId:label.userID,postID:label.postID})} style={{color:"whiteSmoke"} }value={1} text='PROFILE' />
    <MenuOption style={{color:"whiteSmoke"}} value={2}>
      <Text style={{color:"whiteSmoke"}}>REPORT</Text>
    </MenuOption>
    <MenuOption value={3} text='CLOSE' />
  </MenuOptions>
</Menu>
        </MenuProvider>  */}        
      </View>
      </View>
  
 
    </View>))}
    </View>
    </View>
    
  
  
  </ScrollView>
);


  const renderTabBar = props => (
    <TabBar
        {...props}
        activeColor={'black'}
        inactiveColor={'black'}
        style={{marginTop:0,backgroundColor:'white', textTransform: 'lowercase'}}
        indicatorStyle={{ backgroundColor: 'blue' }}
        getLabelText={({ route }) => route.title}
    />
);

// const PlaceholderImage = require('../../../../assets/bg/bgimage5.jpg');


export default function Manage({navigation,route, }) {
 
 

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async (file) => {


    let File = await DocumentPicker.getDocumentAsync({
     copyToCacheDirectory : false,
      type: 'image/*'
    })
    if(File.type === 'cancel'){
      console.log("cancel")
    }else{

      var config = {
        headers:{
     'Content-type':'multipart/form-data'
        }
       };
       var formData = new FormData();
       formData.append('file1',{type:File.mimeType,uri:File.uri,name:File.name})
       gets.post.map((label) =>{
        formData.append('postID',label.postID)
       })
      Alert.alert(
        "", 
        "You Want To Apply This Picture?",
        [
          {
            text: "Yes",
            onPress: () => { axiosRequest.post('api/postpicture.php',formData,config).then((response) => {
              if(response.data === "Picture Added"){
              Alert.alert(response.data,"Change screen to see the changes made",
              [
          {
            text: "Okay!",
            onPress: () => console.log("NO ACCTION"),
            style: "yes"
          }
        ]
             )
      }
           
                 })},
            style: "yes"
          },
          { 
            text: "No", onPress: () => console.log("No Pressed")
          }
        ]
      )
    }
}

 const [applied,setGet] = React.useState([])
 const [app,setApp] = React.useState({
      post : []
     })
     
     

 const Profile = () => {
    navigation.navigate('Applicant profile')
  }
     
    

// const { itemId,title } = route.params
const {post} = route.params

     
// var Data ={
//       postID : itemId
//       };

      // var headers = {
      //   'Access-Control-Allow-Origin': 'true',
      //   'Content-Type': 'application/json',
      // };
     
 
React.useEffect(()=>{
 
navigation.setOptions({
   title: post.looking_for,
   headerTitleAlign: 'center',
   headerStyle: { backgroundColor: 'white', height: 150 },
   headerTitleStyle: { fontWeight: '100', fontSize: 25 }
  })
 
  
 navigation.addListener('focus',async () => {
  
 await axiosRequest.get('auth/apply/applied/'+post.id+'/')  
      .then((response) => {
        // console.log(response.data)
setGet (response.data)


      })
      
 
      
}

  )
},[])

    
    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <FirstRoute navigation={navigation} arr = {post}/>;
          case 'second':

            return <SecondRoute navigation={navigation}  profile = {Profile} arr = {applied}  />;

         
            
          default:
            return null;
        }
      };
  const layout = useWindowDimensions();
  const {height, width} = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Posted hiring' },
    { key: 'second', title: 'Applicants' },
  ]
  );
  
  return (
    <SafeAreaView style={{flex: 1}}>
   {

    post.image ? <Image
    source= {{uri: server+label.image}}
    style={[{  
     width: 'auto',
     height: 100,
     resizeMode: 'cover', height: height * 0.20, 
     }]} 
     /> :  <Image 
     source= {Logo}
      style={[{  
       width: 'auto',
       height: 100,
       resizeMode: 'cover', height: height * 0.20, 
       }]} 
       /> 
      }
     <View style={{flexDirection: 'row-reverse',  justifyContent: 'flex-start', alignItems: 'flex-end'}}>
     <View style={{padding: 5, position: 'absolute', flex: 1, }}>
     <TouchableOpacity onPress={pickImageAsync}>
     <View style={{backgroundColor: 'grey', width: 50, height: 50,  borderRadius: 25, padding: 6,}}>
     <Icon3 name='edit' style={{
      fontSize: 35, 
      color: 'gold', 
      margin: 1
      
      }}/>
     </View>
     </TouchableOpacity>
     </View>
     </View>
     
     
<TabView key= {index}
    navigationState={{ index, routes }}
    renderScene={renderScene}
    renderTabBar={renderTabBar}
    onIndexChange={setIndex}
    initialLayout={{ width: Dimensions.get('window').width }}
    />
     
     
    
</SafeAreaView>
  );
}
