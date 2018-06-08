function teachersPage(props) {
    render(props) {
        return (
            <div className="">
                <div className='rows'>
                    <div className='col-xm-2 leftNavigation'>
                        <ul>
                            <li>Homepage!</li>
                            <li>Video Chat!</li>
                            <li>Chat!</li>
                            <li>Logout!</li>
                        </ul>
                    </div>

                    <div className='col-xm-7 midSection'>
                        <ul>
                            <li>Attendance Register</li>
                            <li>Time Table</li>
                            <li>Lesson Note</li>
                            <li>Assignments</li>
                            <li>BioData</li>
                            <li>CA Record</li>
                            <li>Exams Record</li>
                        </ul>
                    </div>

                    <div className='col-xm-3 rightSection'>
                        <ul>
                            <li><i className='fa fa-envelope'></i></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>{props.copyright}</p>
                </div>
            </div>
        );
    }
}
