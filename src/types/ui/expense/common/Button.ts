export type Button = {
  type: ButtonType.Primary | ButtonType.Danger | ButtonType.Info
}

export enum ButtonType {
  Primary,
  Danger,
  Info,
}

export enum ButtonSize {
  Sm,
  Md,
}
