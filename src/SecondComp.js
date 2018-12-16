import React from 'react';

const MyStatelessComponent = props => <div>{props.name}</div>;

class SecondComp extends React.Component {
    render() {
        return <MyStatelessComponent name="hello world"/>
    }
}
export default SecondComp