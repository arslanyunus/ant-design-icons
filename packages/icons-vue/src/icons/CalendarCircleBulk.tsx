// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarCircleBulkSvg from '@ant-design/icons-svg/lib/asn/CalendarCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarCircleBulk: CalendarCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarCircleBulkSvg}></AntdIcon>;
};

CalendarCircleBulk.displayName = 'CalendarCircleBulk';
CalendarCircleBulk.inheritAttrs = false;
export default CalendarCircleBulk;