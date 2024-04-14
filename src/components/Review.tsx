let e = React.createElement;

export default class Review extends React.Component {

    render() {

    return React.createElement(
        'div',
        {},
        e('div', {className: 'card-body'}, this.props.text)
    );
    }

}