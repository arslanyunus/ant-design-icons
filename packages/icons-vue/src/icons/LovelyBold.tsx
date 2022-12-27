// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LovelyBoldSvg from '@ant-design/icons-svg/lib/asn/LovelyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LovelyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LovelyBold: LovelyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LovelyBoldSvg}></AntdIcon>;
};

LovelyBold.displayName = 'LovelyBold';
LovelyBold.inheritAttrs = false;
export default LovelyBold;