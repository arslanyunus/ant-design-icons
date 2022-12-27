// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerPauseTwoToneSvg from '@ant-design/icons-svg/lib/asn/TimerPauseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerPauseTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerPauseTwoTone: TimerPauseTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerPauseTwoToneSvg}></AntdIcon>;
};

TimerPauseTwoTone.displayName = 'TimerPauseTwoTone';
TimerPauseTwoTone.inheritAttrs = false;
export default TimerPauseTwoTone;