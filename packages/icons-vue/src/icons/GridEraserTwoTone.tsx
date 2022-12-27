// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridEraserTwoToneSvg from '@ant-design/icons-svg/lib/asn/GridEraserTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridEraserTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridEraserTwoTone: GridEraserTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridEraserTwoToneSvg}></AntdIcon>;
};

GridEraserTwoTone.displayName = 'GridEraserTwoTone';
GridEraserTwoTone.inheritAttrs = false;
export default GridEraserTwoTone;