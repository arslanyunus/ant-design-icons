// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bluetooth2BulkSvg from '@ant-design/icons-svg/lib/asn/Bluetooth2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bluetooth2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bluetooth2Bulk: Bluetooth2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bluetooth2BulkSvg}></AntdIcon>;
};

Bluetooth2Bulk.displayName = 'Bluetooth2Bulk';
Bluetooth2Bulk.inheritAttrs = false;
export default Bluetooth2Bulk;