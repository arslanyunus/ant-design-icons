// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeft1BulkSvg from '@ant-design/icons-svg/lib/asn/RotateLeft1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeft1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeft1Bulk: RotateLeft1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeft1BulkSvg}></AntdIcon>;
};

RotateLeft1Bulk.displayName = 'RotateLeft1Bulk';
RotateLeft1Bulk.inheritAttrs = false;
export default RotateLeft1Bulk;