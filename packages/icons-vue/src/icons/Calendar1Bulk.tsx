// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar1BulkSvg from '@ant-design/icons-svg/lib/asn/Calendar1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar1Bulk: Calendar1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar1BulkSvg}></AntdIcon>;
};

Calendar1Bulk.displayName = 'Calendar1Bulk';
Calendar1Bulk.inheritAttrs = false;
export default Calendar1Bulk;