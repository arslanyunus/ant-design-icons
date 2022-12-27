// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarCircleLinearSvg from '@ant-design/icons-svg/lib/asn/CalendarCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarCircleLinear: CalendarCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarCircleLinearSvg}></AntdIcon>;
};

CalendarCircleLinear.displayName = 'CalendarCircleLinear';
CalendarCircleLinear.inheritAttrs = false;
export default CalendarCircleLinear;