// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarTickLinearSvg from '@ant-design/icons-svg/lib/asn/CalendarTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarTickLinear: CalendarTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarTickLinearSvg}></AntdIcon>;
};

CalendarTickLinear.displayName = 'CalendarTickLinear';
CalendarTickLinear.inheritAttrs = false;
export default CalendarTickLinear;