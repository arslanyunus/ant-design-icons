// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarSearchBulkSvg from '@ant-design/icons-svg/lib/asn/CalendarSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarSearchBulk: CalendarSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarSearchBulkSvg}></AntdIcon>;
};

CalendarSearchBulk.displayName = 'CalendarSearchBulk';
CalendarSearchBulk.inheritAttrs = false;
export default CalendarSearchBulk;