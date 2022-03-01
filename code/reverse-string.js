export default function(string) {
  if (string === '' || typeof string !== 'string') return '';
  return string.split('').reverse().join('');
}