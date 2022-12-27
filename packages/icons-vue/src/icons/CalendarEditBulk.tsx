// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarEditBulkSvg from '@ant-design/icons-svg/lib/asn/CalendarEditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarEditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarEditBulk: CalendarEditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarEditBulkSvg}></AntdIcon>;
};

CalendarEditBulk.displayName = 'CalendarEditBulk';
CalendarEditBulk.inheritAttrs = false;
export default CalendarEditBulk;