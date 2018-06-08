

function highSchoolStudentPage(props) {

    function renderCourseComponent() {
        if (props.CourseComponent == '') {
            return null;
        } else (props.CourseComponent == 'hidden') {
            return null;
        }

        var courses = this.state.registeredCourses;
        var theCourses = theCourses.map(function (thisCourse) {
            <div className='coursesRegistered'>
                <div>
                    <li key={thisCourse}>{thisCourse}</li>
                </div>
                <div>
                    <p>registered!</p>
                </div>
            </div>
        });

        return <div className='listOfRegisteredCourses'>{theCourses}</div>;              
    }

    function renderTransScript(props){
        return(
                 <div> 
                     <p>Request For Transcript</p>
                     <button>Yes</button>
                     <button>No</button>
                 </div>
              );
    }

    function renderTimedTest(){
        return <div>

               </div>;
    }

    function renderTimeTable(){
        return (
                  <div>

                  </div>
               );
    }

    function renderPastQuestions(){
        return (
                <div>

                </div>
               );
    }

    function renderResults() {
        return (
                <div>

                </div>
               );
    }

    function renderAssesments(){
        return (
                <div>

                </div>
               );
    }

    function renderAssignments(){
        return (
                <div>

                </div>
               );
    }

    function renderBioDataComponent(){
        return (
                <div>

                </div>
               );
    }

        return (
            <div className="">
                <div className='rows'>
                    <div className='col-xm-2 leftNavigation'>
                        <ul>
                            <li onClick={props.gotoHomePage}>Homepage!</li>
                            <li onClick={props.videoChat}>Video Chat!</li>
                            <li onClick={props.chat}>Chat!</li>
                            <li onClick={props.logout}>Logout!</li>
                        </ul>
                    </div>

                    <div className='col-xm-7 midSection'>
                        <ul>
                            <li onClick={props.registeredCourses}>Registered Courses</li>
                            <li onClick={props.results}>Results</li>
                            <li onClick={props.transcript}>Transcript</li>
                            <li onClick={props.assignments}>Assignments</li>
                            <li onClick={props.bioData}>BioData</li>
                            <li onClick={props.assesments}>CA (Countinue Assesments)</li>
                            <li onClick={props.timeTable}>Time Table</li>
                            <li onClick={props.pastQuestions}>Past Questions</li>
                            <li onClick={props.timedTest}>Timed Test!</li>
                        </ul>
                        <div>{renderCourseComponent()}</div>
                        <div>{renderBioDataComponent()}</div>
                        <div>{renderTransScript()}</div>
                        <div>{renderAssignments()}</div>
                        <div>{renderTimeTable()}</div>
                        <div>{renderResults()}</div>
                        <div>{renderPastQuestions()}</div>
                        <div>{renderTimedTest()}</div>
                        <div>{renderAssesments()}</div>
                    </div>

                    <div className='col-xm-3 rightSection'>
                        <ul>
                            <li>{}</li>
                            <li><i className='fa fa-envelope'></i></li>
                            <li>{}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>{props.copyright}</p>
                </div>
            </div>
        );
}
