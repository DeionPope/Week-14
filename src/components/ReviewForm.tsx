import 'bootstrap/dist/css/bootstrap.min.css';


let e = React.createElement;
let text;
let movie;

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews
    }
  }


// was trying to set the movie/text input box using target.value so that the user input can be linked to the addReview function in ReviewList.js

  handleClick() {
    this.props.function(
      {
        movie: movie,
        text: text,
      }
    );
  }

  handleTextupdate(e) {
    text = e.target.value
  }

  handleTitleupdate(e) {
    movie = e.target.value
  }

  render() {

    // review this movie with input box and submit button
    return React.createElement(
      'div',
      {},
      e('div', {className:'p-2'}, 'What did you think?'),
      e('div',
        {},
        e('div', {className:'text-secondary'}, 'Review this movie:'),
        e('textarea', {className:'d-block w-100', onChange:this.handleTextupdate.bind(this)}, null),
        e('button', {onClick:this.handleClick.bind(this)}, 'Submit')
      ),
      e('div', {}, null)
    );
  }
}