// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampChargeBrokenSvg from '@ant-design/icons-svg/lib/asn/LampChargeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampChargeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampChargeBroken: LampChargeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampChargeBrokenSvg}></AntdIcon>;
};

LampChargeBroken.displayName = 'LampChargeBroken';
LampChargeBroken.inheritAttrs = false;
export default LampChargeBroken;