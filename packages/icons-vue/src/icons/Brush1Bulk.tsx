// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush1BulkSvg from '@ant-design/icons-svg/lib/asn/Brush1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush1Bulk: Brush1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush1BulkSvg}></AntdIcon>;
};

Brush1Bulk.displayName = 'Brush1Bulk';
Brush1Bulk.inheritAttrs = false;
export default Brush1Bulk;