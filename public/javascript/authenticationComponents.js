function addminAuthentication(props) {
    render(props) {
        return (
            <div className='addminAuthentication'>
                <div>
                    <form>
                        <input type="username" /><br />
                        <input type="password" /><br />
                        <button>Submit</button>
                        <button>forgot password</button>
                    </form>
                </div>
                <p>{props.copyright}</p>
            </div>
        );
    }
}

function parentAuthentication(props) {
    render(props) {
        return (
            <div className='addminAuthentication'>
                <div>
                    <form className='parentAuthentication'>
                        <input type="username" /><br />
                        <input type="password" /><br />
                        <button>Submit</button>
                        <button>forgot password</button>
                    </form>
                </div>
                <p>{props.copyright}</p>
            </div>
        );
    }
}

function teachersAuthentication(props) {
    render(props) {
        return (
            <div className=''>
                <div>
                    <form className="teachersAuthentication">
                        <input type="username" /><br />
                        <input type="password" /><br />
                        <button>Submit</button>
                        <button>forgot password</button>
                    </form>
                </div>
                <p>{props.copyright}</p>
            </div>
        );
    }
}