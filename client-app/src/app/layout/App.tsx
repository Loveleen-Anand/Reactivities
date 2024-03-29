import React,{useEffect} from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() { 
  const {activityStore} = useStore();
   useEffect(()=>{
    //axios.get<Activity[]>('http://localhost:5000/api/activities')
   activityStore.loadActivities();
  },[activityStore])

 
   if(activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

  return (
    <> 
      {/* <Header as='h2' icon='users' content='Reactivities'/> */}
      <NavBar />
      <Container style={{marginTop:'7em'}}>
      <ActivityDashboard/>
      </Container>          
    </> 
  );
}

export default observer(App);
