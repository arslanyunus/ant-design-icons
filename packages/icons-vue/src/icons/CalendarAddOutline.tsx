// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarAddOutlineSvg from '@ant-design/icons-svg/lib/asn/CalendarAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarAddOutline: CalendarAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarAddOutlineSvg}></AntdIcon>;
};

CalendarAddOutline.displayName = 'CalendarAddOutline';
CalendarAddOutline.inheritAttrs = false;
export default CalendarAddOutline;