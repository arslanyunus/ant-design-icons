// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Notification1BulkSvg from '@ant-design/icons-svg/lib/asn/Notification1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Notification1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Notification1Bulk: Notification1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Notification1BulkSvg}></AntdIcon>;
};

Notification1Bulk.displayName = 'Notification1Bulk';
Notification1Bulk.inheritAttrs = false;
export default Notification1Bulk;