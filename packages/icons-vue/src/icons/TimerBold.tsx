// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerBoldSvg from '@ant-design/icons-svg/lib/asn/TimerBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerBold: TimerBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerBoldSvg}></AntdIcon>;
};

TimerBold.displayName = 'TimerBold';
TimerBold.inheritAttrs = false;
export default TimerBold;