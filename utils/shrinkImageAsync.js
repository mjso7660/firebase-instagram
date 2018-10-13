import { ImageManipulator } from 'expo';

function reduceImageAsync(uri, _width) {
  return ImageManipulator.manipulate(uri, [{ resize: { width: _width } }], {
    compress: 0.5,
  });
}
export default reduceImageAsync;
