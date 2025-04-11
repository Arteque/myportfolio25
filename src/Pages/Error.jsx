
const Error =  ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" style={{position:'absolute', insetBlockStart:'50%', insetInlineStart:'50%', transform:'translate(-50%,-50%)'}}>
      <h2>Error</h2>
      <hp>Something went wrong:</hp>
      <pre style={{ color: "var(--clr-bg-100)", background:"var(--clr-txt-100)", padding:"1rem", margin:"1rem 0"}}>{error.message}</pre>
  </div>
  )
};

export default Error;
