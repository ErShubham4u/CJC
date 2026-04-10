const User = (props) => {
    return (
        <div className="user-card">
            <h2>Name : {props.name}</h2>
            <h3>Location : Patna, Bihar</h3>
            <h4>Contact : @ErShubham4u</h4>
        </div>
    );
};

export default User;