import Head from 'next/head'
import Page from '../components/page'
import CourseStaff from '../components/coursestaff'
import CourseOverview from '../components/courseoverview'
import CourseDescription from '../components/coursedescription'
import ConvNetDemo from '../components/classifier_demo/demo'
import { Alert } from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2023)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>
          <h2>Welcome to CSC2541: Machine Learning for Healthcare! &#128075;&#65039;</h2>

          <ConvNetDemo/>
          <br></br>

          <h3>The Essentials</h3>
          <CourseOverview/>
          <br></br>

          <h3>Announcements</h3>
           {/* Alert for checking out project resources. */}
           <Alert variant="info">
            Sign up for final project presentations here (first-come first-serve): 
            <a href="https://docs.google.com/spreadsheets/d/1xpBEfohvmErgX1CuCWrr3znGroR7JWNWv_arwe9aQsU/edit#gid=0" target="_blank">Sign-up Schedule</a>.
            
             <br></br>
             <div align="right">
               <small>October 19, 2023</small>
             </div>
           </Alert>
           <Alert variant="info">
             Note that our new location is BA2155
             <br></br>
             <div align="right">
               <small>September 11, 2023</small>
             </div>
           </Alert>
           <Alert variant="info">
             The first day of classes will be Thursday, September 14, 2023!
             <br></br>
             <div align="right">
               <small>September 6, 2023</small>
             </div>
           </Alert>
           {/* <Alert variant="info">
             We've posted <Alert.Link href="/projectresources">project datasets and resources</Alert.Link> - make sure to check them out, as they might be helpful as you work on brainstorming for your course projects!
             <br></br>
             <div align="right">
               <small>September 17, 2023</small>
             </div>
           </Alert> */}

          <h3>Course Description</h3>
          <CourseDescription/>
          <br></br>

          <h3>Teaching Staff</h3>
          <CourseStaff/>
          <br></br>

        </Page>
    </div>
  )
}
