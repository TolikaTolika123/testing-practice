export default function(string) {
  if (string === '' || typeof string !== 'string') return '';
  return string.split('')[0].toUpperCase() + string.split('').slice(1).join('');
}