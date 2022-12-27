// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampChargeTwoToneSvg from '@ant-design/icons-svg/lib/asn/LampChargeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampChargeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampChargeTwoTone: LampChargeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampChargeTwoToneSvg}></AntdIcon>;
};

LampChargeTwoTone.displayName = 'LampChargeTwoTone';
LampChargeTwoTone.inheritAttrs = false;
export default LampChargeTwoTone;