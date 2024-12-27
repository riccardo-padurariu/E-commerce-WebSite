import '../../Styles/SlideCount.css';

export default function SlideCount(props) {
  return (
    <div className='slide-count'>
      <p className='slide-p'>{props.number}</p>
    </div>
  );
}