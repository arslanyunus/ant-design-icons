// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileBoldSvg from '@ant-design/icons-svg/lib/asn/MobileBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileBold: MobileBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileBoldSvg}></AntdIcon>;
};

MobileBold.displayName = 'MobileBold';
MobileBold.inheritAttrs = false;
export default MobileBold;