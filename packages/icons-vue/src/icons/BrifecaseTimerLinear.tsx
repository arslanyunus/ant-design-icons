// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTimerLinearSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTimerLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTimerLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTimerLinear: BrifecaseTimerLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTimerLinearSvg}></AntdIcon>;
};

BrifecaseTimerLinear.displayName = 'BrifecaseTimerLinear';
BrifecaseTimerLinear.inheritAttrs = false;
export default BrifecaseTimerLinear;