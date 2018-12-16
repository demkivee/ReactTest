import React from 'react';

const MyStatelessComponent = props => <div>Text: {props.name}</div>;

class MyComponent extends React.Component {
    render() {
        return <MyStatelessComponent name="hello world!"/>
    }
}
export default MyComponent