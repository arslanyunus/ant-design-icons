// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarLinearSvg from '@ant-design/icons-svg/lib/asn/CalendarLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarLinear: CalendarLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarLinearSvg}></AntdIcon>;
};

CalendarLinear.displayName = 'CalendarLinear';
CalendarLinear.inheritAttrs = false;
export default CalendarLinear;