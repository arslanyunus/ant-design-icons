// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerTwoToneSvg from '@ant-design/icons-svg/lib/asn/TimerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerTwoTone: TimerTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerTwoToneSvg}></AntdIcon>;
};

TimerTwoTone.displayName = 'TimerTwoTone';
TimerTwoTone.inheritAttrs = false;
export default TimerTwoTone;