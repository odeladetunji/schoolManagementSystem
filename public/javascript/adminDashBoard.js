function adminDashBoard(props) {

    function enterCourses(){
        var finalElement;
        const coursesLength = props.courses.length;
        var counter = 0;
        for (x in props.courses) {
            var arrayObject = props.courses[x].firstTerm;
            var arrayOfElements = arrayObject.map(function (currentValue) {
                <li>currentValue</li>
            });
            var element = <div className="coursesPerClass">
                                <p>{x}</p>
                                <div>
                                <div>
                                        <input value="Add New Subject Here" type="text"/>
                                </div>
                                <div>
                                        <button>Add</button>
                                </div>
                                </div>
                                <ul>
                                    {arrayOfElements}
                                </ul>
                          </div>

            finalElement.push(element);
            counter++;
            if ( counter == coursesLength) {
                return finalElement;
            }
        }
    }

    render(props) {
        return (
            <div className="">
                <div className='rows'>
                    <div className='col-xm-2 leftNavigation'>
                        <ul>
                            <li onClick={props.gotoHomePage}>Homepage!</li>
                            <li onClick={props.videoChat}>Video Chat!</li>
                            <li onClick={props.chat}>Chat!</li>
                            <li onClick={props.customerCare}>Customer Care!</li>
                            <li onClick={props.subscription}>Subsription!</li>
                            <li onClick={props.logout}>Logout!</li>
                        </ul>
                    </div>

                    <div className='col-xm-7 midSection'>
                        <div>
                            <div>
                                <i className='fa fa-search'></i>
                            </div>
                            <div>
                                <input type="text" />
                            </div>
                        </div>

                        <ul>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                        {this.enterCourses()}
                    </div>

                    <div className='col-xm-3 rightSection'>
                        <ul>
                            <li></li>
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