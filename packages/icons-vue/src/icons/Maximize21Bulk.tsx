// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize21BulkSvg from '@ant-design/icons-svg/lib/asn/Maximize21Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize21BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize21Bulk: Maximize21BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize21BulkSvg}></AntdIcon>;
};

Maximize21Bulk.displayName = 'Maximize21Bulk';
Maximize21Bulk.inheritAttrs = false;
export default Maximize21Bulk;