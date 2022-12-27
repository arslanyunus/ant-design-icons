// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Blend2BulkSvg from '@ant-design/icons-svg/lib/asn/Blend2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Blend2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Blend2Bulk: Blend2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Blend2BulkSvg}></AntdIcon>;
};

Blend2Bulk.displayName = 'Blend2Bulk';
Blend2Bulk.inheritAttrs = false;
export default Blend2Bulk;