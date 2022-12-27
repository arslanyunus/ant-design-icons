// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTimerBrokenSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTimerBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTimerBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTimerBroken: BrifecaseTimerBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTimerBrokenSvg}></AntdIcon>;
};

BrifecaseTimerBroken.displayName = 'BrifecaseTimerBroken';
BrifecaseTimerBroken.inheritAttrs = false;
export default BrifecaseTimerBroken;