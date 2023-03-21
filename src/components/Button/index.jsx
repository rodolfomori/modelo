import { ButtonSecondary, ButtonPrimary } from './styles'

function Button({ secondary = false, children, ...rest }) {
  return (
    <>
      {secondary ? (
        <ButtonSecondary {...rest}>{children}</ButtonSecondary>
      ) : (
        <ButtonPrimary {...rest}>{children}</ButtonPrimary>
      )}
    </>
  )
}

export default Button
