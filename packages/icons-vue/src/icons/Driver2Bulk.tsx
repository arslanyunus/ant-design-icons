// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Driver2BulkSvg from '@ant-design/icons-svg/lib/asn/Driver2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Driver2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Driver2Bulk: Driver2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Driver2BulkSvg}></AntdIcon>;
};

Driver2Bulk.displayName = 'Driver2Bulk';
Driver2Bulk.inheritAttrs = false;
export default Driver2Bulk;