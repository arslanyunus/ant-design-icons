// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarAddLinearSvg from '@ant-design/icons-svg/lib/asn/CalendarAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarAddLinear: CalendarAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarAddLinearSvg}></AntdIcon>;
};

CalendarAddLinear.displayName = 'CalendarAddLinear';
CalendarAddLinear.inheritAttrs = false;
export default CalendarAddLinear;