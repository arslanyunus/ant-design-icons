// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerBrokenSvg from '@ant-design/icons-svg/lib/asn/TimerBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerBroken: TimerBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerBrokenSvg}></AntdIcon>;
};

TimerBroken.displayName = 'TimerBroken';
TimerBroken.inheritAttrs = false;
export default TimerBroken;