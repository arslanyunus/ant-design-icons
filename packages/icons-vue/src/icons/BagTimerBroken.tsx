// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTimerBrokenSvg from '@ant-design/icons-svg/lib/asn/BagTimerBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTimerBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTimerBroken: BagTimerBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTimerBrokenSvg}></AntdIcon>;
};

BagTimerBroken.displayName = 'BagTimerBroken';
BagTimerBroken.inheritAttrs = false;
export default BagTimerBroken;