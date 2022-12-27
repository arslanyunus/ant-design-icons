// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerPauseBoldSvg from '@ant-design/icons-svg/lib/asn/TimerPauseBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerPauseBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerPauseBold: TimerPauseBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerPauseBoldSvg}></AntdIcon>;
};

TimerPauseBold.displayName = 'TimerPauseBold';
TimerPauseBold.inheritAttrs = false;
export default TimerPauseBold;