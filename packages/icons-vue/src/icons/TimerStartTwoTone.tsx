// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerStartTwoToneSvg from '@ant-design/icons-svg/lib/asn/TimerStartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerStartTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerStartTwoTone: TimerStartTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerStartTwoToneSvg}></AntdIcon>;
};

TimerStartTwoTone.displayName = 'TimerStartTwoTone';
TimerStartTwoTone.inheritAttrs = false;
export default TimerStartTwoTone;