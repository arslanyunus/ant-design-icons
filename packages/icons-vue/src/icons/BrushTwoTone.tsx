// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrushTwoToneSvg from '@ant-design/icons-svg/lib/asn/BrushTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrushTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrushTwoTone: BrushTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrushTwoToneSvg}></AntdIcon>;
};

BrushTwoTone.displayName = 'BrushTwoTone';
BrushTwoTone.inheritAttrs = false;
export default BrushTwoTone;