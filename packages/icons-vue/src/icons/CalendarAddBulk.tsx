// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarAddBulkSvg from '@ant-design/icons-svg/lib/asn/CalendarAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarAddBulk: CalendarAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarAddBulkSvg}></AntdIcon>;
};

CalendarAddBulk.displayName = 'CalendarAddBulk';
CalendarAddBulk.inheritAttrs = false;
export default CalendarAddBulk;