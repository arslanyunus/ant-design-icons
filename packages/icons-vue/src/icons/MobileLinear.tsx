// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileLinearSvg from '@ant-design/icons-svg/lib/asn/MobileLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileLinear: MobileLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileLinearSvg}></AntdIcon>;
};

MobileLinear.displayName = 'MobileLinear';
MobileLinear.inheritAttrs = false;
export default MobileLinear;