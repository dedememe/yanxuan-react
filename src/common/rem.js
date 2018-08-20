/* rem适配 */
export default(function (designWidth) {
  var size = document.documentElement.clientWidth / (designWidth / 100)
  document.documentElement.style.fontSize = size + 'px'
  document.body.style.fontSize = '12px'
})(750)
