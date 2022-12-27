// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarBulkSvg from '@ant-design/icons-svg/lib/asn/CalendarBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarBulk: CalendarBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarBulkSvg}></AntdIcon>;
};

CalendarBulk.displayName = 'CalendarBulk';
CalendarBulk.inheritAttrs = false;
export default CalendarBulk;