// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush4BulkSvg from '@ant-design/icons-svg/lib/asn/Brush4Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush4BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush4Bulk: Brush4BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush4BulkSvg}></AntdIcon>;
};

Brush4Bulk.displayName = 'Brush4Bulk';
Brush4Bulk.inheritAttrs = false;
export default Brush4Bulk;