import { Color, Group } from 'three'

export class MarchingCube extends Group {
  constructor(
    public color = new Color(),
    public strength = 0.4,
    public subtract = 7
  ) {
    super()
  }
}
