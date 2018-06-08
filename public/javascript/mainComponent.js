class ParentComponent extends React.Component {
    Constructor(props) {
        super(props);
        this.state = {
            courses: {
                ss3: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
                ss2: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
                ss1: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
                js3: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
                js2: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
                js1: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
                pri6: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
                pri5: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
                pri4: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
                pri3: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
                pri2: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
                pri1: {
                    'firstTerm': [],
                    'secondTerm': [],
                    'thirdTerm': []
                },
            },
            biodata: {
                studentBioData: {

                },

                parentBioData: {

                },

                teachersBioData: {

                },

                nonAcademicStaffBioData: {

                }
            },
            positionInClass: {

            },

            pastAttendance: {

            },

            numberOfRegisteredStudents: {
                firstTerm: {

                },
                secondTerm: {

                },
                thirdTerm: {

                }
            },

            numberOfStudentPerClass: {

            },

            totalNumbersOfTeachers: {

            },

            totalNumbersOfStaffs: {

            },

            onGoingClasses: {

            },

            announcement: {

            },

            timeTable: {

            },

            timedTest: {

            },

            pastQuestions: {

            },

            results: {

            },

            CA: {

            },

            tuitionAndFees: {

            },

            missionAndVision: {

            },

            registeredCourses: [

            ],

            assignments: {

            },

            // hidden will be the default for this Components 
            // the values will toggle between 'hidden' and 'display'

            videoChat: 'hidden',

            textChat: 'hidden',

            home: 'hidden',

            highSchoolStudentPage: 'hidden',

            teachersPage: 'hidden',

            adminDashBoard: 'hidden',

            highSchoolStudentAuthentication: 'hidden',

            parentAuthentication: 'hidden',

            addminAuthentication: 'hidden',

            parentPage: 'hidden',

            teachersAuthentication: 'hidden',

            teachersPage: 'hidden'
        }
    }

    // now this anonymous function will be the one responsible for populating the whole parent Class
    getInitialStates() {
        var initialStates = new XMLHttpRequest();
        initialStates.onreadystatechange = function (event) {
            if (readyStateChange == '200') {
                if (readyStateChange == 'OK') {
                    // get the Data
                    //setState({});
                }
            }
        };

        initialStates.open('/initialStates', data, post);
        initialStates.send();
    }


    gotoHomePage() {

    }

    handleVideoChat() {

    }

    handleChat() {

    }
    handleLogout() {

    }

    handleTranscript() {

    }

    registeredCourses() {
        if(this.state.registeredCourses.length == ''){
            return null;
        }else{
          
        }
        const courses = this.state.registeredCourses;
        const theCourses = theCourses.map(function (thisCourse) {
            <li key={thisCourse}>{thisCourse}</li>
        });
    }

    renderHome() {
        return <home value={}
            gotoHomePage={this.gotoHomePage}
            videoChat={this.videoChat}
            chat={this.chat}
            logout={this.logout}
            admissions={this.admissions}
            tuitionAndFees={this.tuitionAndFees}
            missionAndVision={this.missionAndVision}
            events={this.events}
            contact={this.contact}
            about={this.about}
        />
    }

    renderHighSchoolStudentPage() {
        return <highSchoolStudentPage value={}
            gotoHomePage={this.gotoHomePage}
            videoChat={this.videoChat}
            chat={this.chat}
            logout={this.logout}
            registeredCourses={this.registeredCourses}
        />
    }

    renderTeachersPage() {
        return <teachersPage value={}
            gotoHomePage={this.state.gotoHomePage}
            videoChat={this.state.videoChat}
            chat={this.state.chat}
            logout={this.state.logout}
        />
    }

    renderAdminDashBoard() {
        return < adminDashBoard value={}
            gotoHomePage={this.gotoHomePage}
            videoChat={this.videoChat}
            chat={this.chat}
            logout={this.logout}
        />
    }

    renderStudentAuthentication() {
        return < studentLoginPage value={}
            gotoHomePage={this.gotoHomePage}
        />
    }

    renderAdminAuthentication() {
        return < addminAuthentication value={}
            gotoHomePage={this.gotoHomePage}
        />
    }

    renderTeachersAuthentication() {
        return <teachersAuthentication value={}
        />
    }

    renderParentAuthentication() {
        return <parentAuthentication value={} />
    }

    renderParentPage() {
        return <parentPage value={}
        />
    }

    renderVideoChat() {
        return < videoChat value={}
        />
    }

    renderTextChat() {
        return < textChat value={}
        />
    }

    render() {
        return (
            <div className='container-fluid'>
                <div>{this.renderHome()}</div>
                <div>{this.renderAdminAuthentication()}</div>
                <div>{this.renderStudentAuthentication()}</div>
                <div>{this.renderTeachersAuthentication()}</div>
                <div>{this.renderParentAuthentication()}</div>
                <div>{this.renderHighSchoolStudentPage()}</div>
                <div>{this.renderTeachersPage()}</div>
                <div>{this.renderParentPage()}</div>
                <div>{this.renderAdminDashBoard()}</div>
                <div>{this.renderVideoChat()}</div>
                <div>{this.renderTextChat()}</div>
                <div>{}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <ParentComponent />, document.getElementById('root')
);
