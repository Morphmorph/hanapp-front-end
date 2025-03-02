import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './src/views/screens/Loginscreen';
import Signupscreen from './src/views/screens/Signupscreen';
import Forgotscreen from './src/views/screens/Forgotscreen';
import Verifyscreen from './src/views/screens/Verifyscreen';
import { SafeAreaView, StatusBar,BackHandler ,Alert} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './src/views/screens/Studentscreen/Home'
import Home2 from './src/views/screens/Employerscreen/Home';
import Profile from './src/views/screens/Studentscreen/Profile'
import Profile2 from './src/views/screens/Employerscreen/Profile';
import Bookmark from './src/views/screens/Studentscreen/Bookmarks'
import Activity from './src/views/screens/Studentscreen/Activity'
import Settings from './src/views/screens/Studentscreen/Settings'
import Settings2 from './src/views/screens/Employerscreen/Settings';
import Applicant from './src/views/screens/Employerscreen/Applicant';
import CreatePost from './src/views/screens/Employerscreen/Post';
import EditP from './src/views/screens/Employerscreen/Editp';
import Notif from './src/views/screens/Studentscreen/Notif';
import Notif2 from './src/views/screens/Employerscreen/Notif';
import LottieView from "lottie-react-native";
import Userinfo from './src/views/screens/Userinfo';
import Educbg from './src/views/screens/Studentscreen/Educbg';
import Guardianbg from './src/views/screens/Studentscreen/Guardianbg';
import Compdetails from './src/views/screens/Employerscreen/Compdetails';
import CompEdit from './src/views/screens/Employerscreen/compedit';
import Description from './src/views/screens/Studentscreen/Description';
import Manage from './src/views/screens/Employerscreen/Manage';
import Cprofile from './src/views/screens/Studentscreen/Cprofile'
import JSprofile from './src/views/screens/Employerscreen/JSprofile';
import Location from './src/views/components/Location';
import Attachfile from './src/views/screens/Studentscreen/Attachfile';
import Editprofile from './src/views/screens/Employerscreen/Editprofile';
import PassSec from './src/views/screens/Employerscreen/PassSec';
import PassSec2 from './src/views/screens/Studentscreen/PassSec';
import PerAcc from './src/views/screens/Employerscreen/PerAcc';
import PerAcc2 from './src/views/screens/Studentscreen/PerAcc';
import Help from './src/views/screens/Employerscreen/Help';
import Help2 from './src/views/screens/Studentscreen/Help';
import Support from './src/views/screens/Employerscreen/Support';
import Support2 from './src/views/screens/Studentscreen/Support';
import About from './src/views/screens/Employerscreen/About';
import About2 from './src/views/screens/Studentscreen/About';
import Reportprob from './src/views/screens/Employerscreen/Reportprob';
import Reportprob2 from './src/views/screens/Studentscreen/Reportprob';
import Cemail from './src/views/screens/Employerscreen/Cemail';
import Review from './src/views/screens/Employerscreen/Review';
import Interview from './src/views/screens/Employerscreen/Interview';
import EditSched from './src/views/screens/Employerscreen/editsched';
import Richtext from './src/views/components/Richtext';
import Appstatus from './src/views/screens/Studentscreen/Appstatus';
import EditprofileS from './src/views/screens/Studentscreen/Editprofile';
import EditG from './src/views/screens/Studentscreen/EditgG';
import EditeducBG from './src/views/screens/Studentscreen/EditeducBG';
import * as Network from 'expo-network';
import React from 'react';
import UserContext from './src/views/components/context';


const Stack = createNativeStackNavigator();

export default function App() {

      const [user,setUser] = React.useState({
            usertype: null,
            id : null,
            email: null,
            access: null
      })
            async function fetchdata(){
              let network =  Network.getNetworkStateAsync()
            
              if(!(await network).isInternetReachable){
                  Alert.alert("Network Error","Try Again",
                  [
              {
                text: "Reload",
                onPress: () => fetchdata()
                ,
                style: "yes"
              },   {
                    text: "Exit",
                    onPress: () => {BackHandler.exitApp()
                        NavigationContainer.navigate('')
                  }
                    ,
                    style: "cancel"
                  }
            ]
                 )
           
             
                   
              }else{
                console.log((await network).isInternetReachable);
              }
          
            }
            fetchdata()

 



  return (
    
<SafeAreaView style={{flex: 1, paddingTop: 25, backgroundColor: "white"}}>
<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "grey" translucent = {true}/>
   
<NavigationContainer>

<UserContext.Provider value= {{user,setUser}}>
<Stack.Navigator screenOptions={{headerShown: false}}>
 <Stack.Screen 
      name='Log in'
      component={Loginscreen}
      />

<Stack.Screen
      name='Company details'
      component={Compdetails}
      />

<Stack.Screen options={{headerShown:true}}
      name='Company edit'
      component={CompEdit}
      />
<Stack.Screen
      name='User info'
      component={Userinfo}
      />
<Stack.Screen
      name='Education'
      component={Educbg}
      />
      <Stack.Screen options={{headerShown:true}}
      name='Edit post'
      component={EditP}
      />
<Stack.Screen
      name='Guardian'
      component={Guardianbg}
      />

<Stack.Screen
      name='Sign up'
      component={Signupscreen}
      />

<Stack.Screen
      name='Studentscreen'
      component={Studentscreen}
      />


<Stack.Screen
      name='Location'
      component={Location}
      />
<Stack.Screen
      name='Employerscreen'
      component={Employerscreen}
      />

<Stack.Screen options={{headerShown: true}}
      name='Job description'
      component={Description}
      />
<Stack.Screen options={{headerShown: true}}
      name='Manage'
      component={Manage}
      />
<Stack.Screen options={{headerShown: true}}
      name='Review'
      component={Review}
      />
<Stack.Screen options={{headerShown: true}}
      name='Interview schedule'
      component={Interview}
      />
      <Stack.Screen options={{headerShown: true}}
      name='Edit schedule'
      component={EditSched}
      />

<Stack.Screen options={{headerShown: true}}
      name='Application status'
      component={Appstatus}
      />
<Stack.Screen options={{headerShown: true}}
      name='Richtext'
      component={Richtext}
      />
<Stack.Screen options={{headerShown: true}}
      name='Settings'
      component={Settings2}
      />
<Stack.Screen options={{headerShown: true}}
      name='Company profile'
      component={Cprofile}
      />
<Stack.Screen options={{headerShown: true}}
      name='Password and security'
      component={PassSec}
      />
<Stack.Screen options={{headerShown: true}}
      name='Passwords and security'
      component={PassSec2}
      />
<Stack.Screen options={{headerShown: true}}
      name='Personal & account information'
      component={PerAcc}
      />
<Stack.Screen options={{headerShown: true}}
      name='Personal & account informations'
      component={PerAcc2}
      />
<Stack.Screen options={{headerShown: true}}
      name='Employer help'
      component={Help}
      />
<Stack.Screen options={{headerShown: true}}
      name='Student help'
      component={Help2}
      />
<Stack.Screen options={{headerShown: true}}
      name='Support inbox'
      component={Support}
      />
<Stack.Screen options={{headerShown: true}}
      name='Support Inbox'
      component={Support2}
      />
<Stack.Screen options={{headerShown: true}}
      name='About us'
      component={About}
      />
<Stack.Screen options={{headerShown: true}}
      name='About Us'
      component={About2}
      />
<Stack.Screen options={{headerShown: true}}
      name='Report a problem'
      component={Reportprob}
      />
<Stack.Screen options={{headerShown: true}}
      name='Report a Problem'
      component={Reportprob2}
      />
<Stack.Screen options={{headerShown: true}}
      name='Applicant profile'
      component={JSprofile}
      />
<Stack.Screen options={{headerShown: true}}
      name='Edit profile'
      component={Editprofile}
      />

<Stack.Screen options={{headerShown: true}}
      name='Edit profile S'
      component={EditprofileS}
      />
      <Stack.Screen options={{headerShown: true}}
      name='Edit guardian'
      component={EditG}
      />
        <Stack.Screen options={{headerShown: true}}
      name='Edit educBG'
      component={EditeducBG}
      />
<Stack.Screen 
      name='Profile2'
      component={Profile2}
      />
<Stack.Screen options={{headerShown: true}}
      name='Change email address'
      component={Cemail}
      />
<Stack.Screen options={{headerShown: true}}
      name='Notifications'
      component={Notif}
      />
<Stack.Screen options={{headerShown: true}}
      name='Notification'
      component={Notif2}
      />
<Stack.Screen options={{headerShown: true}}
      name='Apply'
      component={Attachfile}
      />
  <Stack.Screen 
      name='Forgotscreen'
      component={Forgotscreen}
      />
<Stack.Screen 
      name='Verifyscreen'
      component={Verifyscreen}
      />
 
    </Stack.Navigator>
</UserContext.Provider>
   </NavigationContainer>
   </SafeAreaView>
  );
};


const Tabs = createBottomTabNavigator();

function Studentscreen () {
 
  return (

      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#F5E44C',
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#F5E44C',
          },

          tabBarIcon: ({ focused, color, size }) => {
            let filePath;
            switch (route.name) {
              case "Home":
                  filePath = require("./assets/Lottie/Home.json");
                  break;
              case "Profile":
                filePath = require("./assets/Lottie/Profile.json");
                break;
              case "Bookmarks":
                filePath = require("./assets/Lottie/Bookmarks.json");
                break;
              case "Activity log":
                filePath = require("./assets/Lottie/Activitylog.json");
                break;
              case "Settings":
                filePath = require("./assets/Lottie/Settings.json");
                break;
              default:
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
            }
            return <LottieView source={filePath} autoPlay={focused} />;
          },
        })}
      >
        <Tabs.Screen 
        name="Home" 
        component={Home} />
       
        <Tabs.Screen 
        name="Bookmarks" 
        component={Bookmark} />
        
        <Tabs.Screen 
        name="Profile" 
        component={Profile} />

        <Tabs.Screen 
        name="Activity log" 
        component={Activity} />
      
        <Tabs.Screen 
        name="Settings" 
        component={Settings} />

      </Tabs.Navigator>
     );
    };

    const Tabs2 = createBottomTabNavigator();

    function Employerscreen () {

      return (
        <Tabs2.Navigator
        
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#F5E44C',
            unmountOnBlur : true
            
          },
          
          headerShown: false,
          
          tabBarStyle: {
            backgroundColor: '#F5E44C',
          },

          tabBarIcon: ({ focused, color, size }) => {
            let filePath;
            switch (route.name) {
              
              case "Home":
                  filePath = require("./assets/Lottie/Home.json");
                  break;
              case "Applicant":
                  filePath = require("./assets/Lottie/Applicant.json");
                  break;
              case "Create post":
                  filePath = require("./assets/Lottie/Add.json");
                  break;
              case "Profile":
                filePath = require("./assets/Lottie/Profile.json");
                break;
              default:
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
            }
            return <LottieView source={filePath} autoPlay={focused} />;
          },
        })}
      >
        <Tabs2.Screen 
        name="Home" 
        component={Home2} 
        options={{unmountOnBlur: true}}/>
       
       <Tabs2.Screen 
        name="Applicant" 
        component={Applicant}
        options={{unmountOnBlur: true}}
         />

        <Tabs2.Screen 
        name="Create post"
        component={CreatePost}
        initialParams={{jobtype:null,jobtitle:null,
            salary:null,rate:null,jobdesc:null,
            street:null,city:null,province:null,zipcode:null,startdate:null,enddate:null}}
        options={{unmountOnBlur: true}}
            />
            
        
        <Tabs.Screen 
        name="Profile" 
        component={Profile2}
        options={{unmountOnBlur: true}}
      />


      </Tabs2.Navigator>
     );
    };
