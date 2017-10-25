
export default props => {
  console.log(props)
  return props.url.query.post && !props.post
}
