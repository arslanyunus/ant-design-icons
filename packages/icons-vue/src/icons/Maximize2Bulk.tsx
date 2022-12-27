// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize2BulkSvg from '@ant-design/icons-svg/lib/asn/Maximize2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize2Bulk: Maximize2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize2BulkSvg}></AntdIcon>;
};

Maximize2Bulk.displayName = 'Maximize2Bulk';
Maximize2Bulk.inheritAttrs = false;
export default Maximize2Bulk;