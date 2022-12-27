// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/CalendarRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarRemoveOutline: CalendarRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarRemoveOutlineSvg}></AntdIcon>;
};

CalendarRemoveOutline.displayName = 'CalendarRemoveOutline';
CalendarRemoveOutline.inheritAttrs = false;
export default CalendarRemoveOutline;