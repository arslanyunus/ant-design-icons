// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampChargeOutlineSvg from '@ant-design/icons-svg/lib/asn/LampChargeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampChargeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampChargeOutline: LampChargeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampChargeOutlineSvg}></AntdIcon>;
};

LampChargeOutline.displayName = 'LampChargeOutline';
LampChargeOutline.inheritAttrs = false;
export default LampChargeOutline;