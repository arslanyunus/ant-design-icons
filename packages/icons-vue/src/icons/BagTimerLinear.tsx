// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTimerLinearSvg from '@ant-design/icons-svg/lib/asn/BagTimerLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTimerLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTimerLinear: BagTimerLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTimerLinearSvg}></AntdIcon>;
};

BagTimerLinear.displayName = 'BagTimerLinear';
BagTimerLinear.inheritAttrs = false;
export default BagTimerLinear;