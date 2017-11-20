
export default Component => props => {
  const { loading, error } = props.data

  if (loading) {
    // return <LoadingIndicator />
    return <div>loading</div>
  }

  if (error) {
    console.log(error)
    // return <ErrorIndicator error={error} />
    return <div>error</div>
  }

  return <Component {...props} />
}
