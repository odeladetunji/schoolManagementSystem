

function highSchoolStudentPage(props) {

    function renderCourseComponent() {
        if (props.CourseComponent == '') {
            return null;
        } else (props.CourseComponent == 'hidden') {
            return null;
        }

        var courses = props.registeredCourses;
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
        var counter = 0;
        var arrayOfElements = [];
        for(x in props.results){
           var element = <div className="results">
                              <ul>
                                  <li>props.results[x]</li>
                                  <li>x</li>
                              </ul>
                         </div>;
               arrayOfElements.push(element);
           counter++;
           if(counter == Object.keys(props.results).length){
               return arrayOfElements;
           }
        }
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
        var counter = 0;
        for(x in props.bioData.studentBioData){
            var arrayOfElements = [];
            var element = <div className='studentBioData'>
                              <div><i className='fa fa-envelope'></i></div>
                              <div>{x}</div>
                              <div>{props.bioData.studentBioData[x]}</div>
                          </div>
            arrayOfElements.push(element);
            counter++;
            if (counter == Object.keys(props.bioData.studentBioData).length) {
                return arrayOfElements;
            }
        }
    }

    function renderTimeTable(perticularDay){
        function getTheCourse(thisClass){
              var counter = 0;
              var arrayOfClasses = [];
              for(x in thisClass){
                 var thisElement = <div className='periods'>
                                        <ul>
                                            <li>{thisClass[x].time}</li>
                                            <li>{thisClass[x].subject}</li>
                                            <li>{thisClass[x].teacher}</li>
                                        </ul>
                                   </div>;

                 arrayOfClasses.push(thisElement);
                 counter++;
                 if(counter == Object.keys(thisClass).length){
                      return arrayOfClasses;
                 }
              }
        }

        function getTheSchedule(thisDay){
              for(x in thisDay){
                 getTheCourse(thisDay[x]);
              }
        }

        for(x in props.timeTable){
            if(x == perticularDay){
                getTheSchedule(props.timeTable[x]);
            }
        }
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
                        <div>
                            <div>
                                <div><i className='fa fa-envelope'></i></div>
                                <div><p>Query</p></div>
                                <div><p>Answer</p></div>
                            <div>
                            {renderBioDataComponent()}
                        </div>
                        <div>{renderTransScript()}</div>
                        <div>{renderAssignments()}</div>
                        <div>
                             <div>
                                   <div><p>Monday</p></div>
                                   <div>{renderTimeTable('monday')}</div>
                             </div>
                             <div>
                                   <div><p>TuesDay</p></div>
                                   <div>{renderTimeTable('tuesday')}</div>
                             </div>
                             <div>
                                <div><p>WednesDay</p></div>
                                <div>{renderTimeTable('wednesday')}</div>
                             </div>
                             <div>
                                <div><p>ThursDay</p></div>
                                <div>{renderTimeTable('thursday')}</div>
                             </div>
                             <div>
                                <div><p>ThursDay</p></div>
                                <div>{renderTimeTable('friday')}</div>
                             </div>
                             <div>
                                <div><p>ThursDay</p></div>
                                <div>{renderTimeTable('saturday')}</div>
                             </div>
                             <div>
                                <div><p>ThursDay</p></div>
                                <div>{renderTimeTable('sunday')}</div>
                             </div>
                        </div>
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
