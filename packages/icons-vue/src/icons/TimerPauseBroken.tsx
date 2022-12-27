// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerPauseBrokenSvg from '@ant-design/icons-svg/lib/asn/TimerPauseBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerPauseBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerPauseBroken: TimerPauseBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerPauseBrokenSvg}></AntdIcon>;
};

TimerPauseBroken.displayName = 'TimerPauseBroken';
TimerPauseBroken.inheritAttrs = false;
export default TimerPauseBroken;