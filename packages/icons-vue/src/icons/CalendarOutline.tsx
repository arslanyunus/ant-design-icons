// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarOutlineSvg from '@ant-design/icons-svg/lib/asn/CalendarOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarOutline: CalendarOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarOutlineSvg}></AntdIcon>;
};

CalendarOutline.displayName = 'CalendarOutline';
CalendarOutline.inheritAttrs = false;
export default CalendarOutline;