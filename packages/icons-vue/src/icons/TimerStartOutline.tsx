// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerStartOutlineSvg from '@ant-design/icons-svg/lib/asn/TimerStartOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerStartOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerStartOutline: TimerStartOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerStartOutlineSvg}></AntdIcon>;
};

TimerStartOutline.displayName = 'TimerStartOutline';
TimerStartOutline.inheritAttrs = false;
export default TimerStartOutline;