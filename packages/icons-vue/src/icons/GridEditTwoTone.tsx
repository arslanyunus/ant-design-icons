// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridEditTwoToneSvg from '@ant-design/icons-svg/lib/asn/GridEditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridEditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridEditTwoTone: GridEditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridEditTwoToneSvg}></AntdIcon>;
};

GridEditTwoTone.displayName = 'GridEditTwoTone';
GridEditTwoTone.inheritAttrs = false;
export default GridEditTwoTone;