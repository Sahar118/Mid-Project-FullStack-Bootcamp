import spinner from '../../assest/childrens.jpeg';

const Spinner = () => (
  <>
    <img
      src={spinner}
      style={{ width: '125px', margin: 'auto', marginTop: '100px', display: 'block' }}
      alt='Loading...'
    />
  </>
);

export default Spinner;
