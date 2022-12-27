// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarTickBulkSvg from '@ant-design/icons-svg/lib/asn/CalendarTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarTickBulk: CalendarTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarTickBulkSvg}></AntdIcon>;
};

CalendarTickBulk.displayName = 'CalendarTickBulk';
CalendarTickBulk.inheritAttrs = false;
export default CalendarTickBulk;