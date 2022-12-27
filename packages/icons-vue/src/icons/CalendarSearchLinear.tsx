// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarSearchLinearSvg from '@ant-design/icons-svg/lib/asn/CalendarSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarSearchLinear: CalendarSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarSearchLinearSvg}></AntdIcon>;
};

CalendarSearchLinear.displayName = 'CalendarSearchLinear';
CalendarSearchLinear.inheritAttrs = false;
export default CalendarSearchLinear;