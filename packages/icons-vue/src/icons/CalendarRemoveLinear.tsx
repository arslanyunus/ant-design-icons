// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/CalendarRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarRemoveLinear: CalendarRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarRemoveLinearSvg}></AntdIcon>;
};

CalendarRemoveLinear.displayName = 'CalendarRemoveLinear';
CalendarRemoveLinear.inheritAttrs = false;
export default CalendarRemoveLinear;