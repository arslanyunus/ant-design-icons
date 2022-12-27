// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar2BulkSvg from '@ant-design/icons-svg/lib/asn/Calendar2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar2Bulk: Calendar2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar2BulkSvg}></AntdIcon>;
};

Calendar2Bulk.displayName = 'Calendar2Bulk';
Calendar2Bulk.inheritAttrs = false;
export default Calendar2Bulk;