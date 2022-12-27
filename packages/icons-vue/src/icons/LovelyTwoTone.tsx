// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LovelyTwoToneSvg from '@ant-design/icons-svg/lib/asn/LovelyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LovelyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LovelyTwoTone: LovelyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LovelyTwoToneSvg}></AntdIcon>;
};

LovelyTwoTone.displayName = 'LovelyTwoTone';
LovelyTwoTone.inheritAttrs = false;
export default LovelyTwoTone;