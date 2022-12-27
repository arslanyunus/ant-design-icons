// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarTickOutlineSvg from '@ant-design/icons-svg/lib/asn/CalendarTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarTickOutline: CalendarTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarTickOutlineSvg}></AntdIcon>;
};

CalendarTickOutline.displayName = 'CalendarTickOutline';
CalendarTickOutline.inheritAttrs = false;
export default CalendarTickOutline;