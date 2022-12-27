// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarEditLinearSvg from '@ant-design/icons-svg/lib/asn/CalendarEditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarEditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarEditLinear: CalendarEditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarEditLinearSvg}></AntdIcon>;
};

CalendarEditLinear.displayName = 'CalendarEditLinear';
CalendarEditLinear.inheritAttrs = false;
export default CalendarEditLinear;