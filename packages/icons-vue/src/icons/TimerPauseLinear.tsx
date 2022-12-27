// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerPauseLinearSvg from '@ant-design/icons-svg/lib/asn/TimerPauseLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerPauseLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerPauseLinear: TimerPauseLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerPauseLinearSvg}></AntdIcon>;
};

TimerPauseLinear.displayName = 'TimerPauseLinear';
TimerPauseLinear.inheritAttrs = false;
export default TimerPauseLinear;