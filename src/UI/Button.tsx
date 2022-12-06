import { ButtonSize, ButtonType } from '../types/ui/expense/common/Button'

type Props = {
  text: string
  buttonType: ButtonType
  onClick?: any
  type?: any
  disabled?: boolean
  size?: ButtonSize
}

const Button = ({
  text,
  buttonType,
  onClick,
  type,
  disabled = false,
  size = ButtonSize.Md,
}: Props) => {
  let textColor
  let bgColor
  let borderColor
  let hoverBgColor
  let disabledBgColor
  let disabledHoverBgColor
  switch (buttonType) {
    case ButtonType.Primary:
      bgColor = 'bg-green-800/70'
      textColor = 'text-white'
      borderColor = 'border-green-800'
      hoverBgColor = 'hover:bg-green-700/70'
      disabledBgColor = 'disabled:bg-green-800/20'
      disabledHoverBgColor = 'disabled:hover:bg-green-800/20'
      break
    case ButtonType.Danger:
      bgColor = 'bg-red-800/70'
      textColor = 'text-white'
      borderColor = 'border-red-800'
      hoverBgColor = 'hover:bg-red-700/70'
      disabledBgColor = 'disabled:bg-red-800/20'
      disabledHoverBgColor = 'disabled:hover:bg-red-800/20'
      break
    case ButtonType.Info:
      bgColor = 'bg-blue-800/70'
      textColor = 'text-white'
      borderColor = 'border-blue-800'
      hoverBgColor = 'hover:bg-blue-700/70'
      disabledBgColor = 'disabled:bg-blue-800/20'
      disabledHoverBgColor = 'disabled:hover:bg-blue-800/20'
      break
    default:
      break
  }
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${bgColor} ${textColor} ${borderColor} ${hoverBgColor} ${disabledBgColor} ${disabledHoverBgColor} duration-200 ${
        size === ButtonSize.Md ? 'px-3 py-1.5' : 'px-1 py-0.5'
      } text-sm mb-2 border max-w-max rounded`}
    >
      {text}
    </button>
  )
}

export default Button
