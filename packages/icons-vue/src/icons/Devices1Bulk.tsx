// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Devices1BulkSvg from '@ant-design/icons-svg/lib/asn/Devices1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Devices1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Devices1Bulk: Devices1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Devices1BulkSvg}></AntdIcon>;
};

Devices1Bulk.displayName = 'Devices1Bulk';
Devices1Bulk.inheritAttrs = false;
export default Devices1Bulk;