// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerOutlineSvg from '@ant-design/icons-svg/lib/asn/TimerOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerOutline: TimerOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerOutlineSvg}></AntdIcon>;
};

TimerOutline.displayName = 'TimerOutline';
TimerOutline.inheritAttrs = false;
export default TimerOutline;