// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerStartBrokenSvg from '@ant-design/icons-svg/lib/asn/TimerStartBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerStartBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerStartBroken: TimerStartBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerStartBrokenSvg}></AntdIcon>;
};

TimerStartBroken.displayName = 'TimerStartBroken';
TimerStartBroken.inheritAttrs = false;
export default TimerStartBroken;