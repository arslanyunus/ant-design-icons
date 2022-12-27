// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Clock1BulkSvg from '@ant-design/icons-svg/lib/asn/Clock1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Clock1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Clock1Bulk: Clock1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Clock1BulkSvg}></AntdIcon>;
};

Clock1Bulk.displayName = 'Clock1Bulk';
Clock1Bulk.inheritAttrs = false;
export default Clock1Bulk;