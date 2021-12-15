import { tuple } from './format'

// 尺寸的选项
const normalSizes = tuple('small', 'medium', 'large')

export { normalSizes }

export type NormalSizes = typeof normalSizes[number]
