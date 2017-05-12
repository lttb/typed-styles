import type {BaseStyle} from './BaseStyle'
import type {PatternStyle} from './PatternStyle'

type JssCustomStyle = {|
  extend?: string | JssStyle,
  composes?: string | string[],
  [selector: string]: JssStyle,
|}

export type JssStyle = {
  ...BaseStyle,
  ...JssCustomStyle,
}
