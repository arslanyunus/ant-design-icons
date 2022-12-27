// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerStartLinearSvg from '@ant-design/icons-svg/lib/asn/TimerStartLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerStartLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerStartLinear: TimerStartLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerStartLinearSvg}></AntdIcon>;
};

TimerStartLinear.displayName = 'TimerStartLinear';
TimerStartLinear.inheritAttrs = false;
export default TimerStartLinear;