// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerStartBoldSvg from '@ant-design/icons-svg/lib/asn/TimerStartBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerStartBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerStartBold: TimerStartBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerStartBoldSvg}></AntdIcon>;
};

TimerStartBold.displayName = 'TimerStartBold';
TimerStartBold.inheritAttrs = false;
export default TimerStartBold;