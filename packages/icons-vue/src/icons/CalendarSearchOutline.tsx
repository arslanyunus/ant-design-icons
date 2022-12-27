// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/CalendarSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarSearchOutline: CalendarSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarSearchOutlineSvg}></AntdIcon>;
};

CalendarSearchOutline.displayName = 'CalendarSearchOutline';
CalendarSearchOutline.inheritAttrs = false;
export default CalendarSearchOutline;