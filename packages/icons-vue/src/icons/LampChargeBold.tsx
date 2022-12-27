// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampChargeBoldSvg from '@ant-design/icons-svg/lib/asn/LampChargeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampChargeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampChargeBold: LampChargeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampChargeBoldSvg}></AntdIcon>;
};

LampChargeBold.displayName = 'LampChargeBold';
LampChargeBold.inheritAttrs = false;
export default LampChargeBold;