// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush2BulkSvg from '@ant-design/icons-svg/lib/asn/Brush2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush2Bulk: Brush2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush2BulkSvg}></AntdIcon>;
};

Brush2Bulk.displayName = 'Brush2Bulk';
Brush2Bulk.inheritAttrs = false;
export default Brush2Bulk;