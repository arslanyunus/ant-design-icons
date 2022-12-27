// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Shapes1BulkSvg from '@ant-design/icons-svg/lib/asn/Shapes1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Shapes1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Shapes1Bulk: Shapes1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Shapes1BulkSvg}></AntdIcon>;
};

Shapes1Bulk.displayName = 'Shapes1Bulk';
Shapes1Bulk.inheritAttrs = false;
export default Shapes1Bulk;