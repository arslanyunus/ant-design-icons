// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRight1BulkSvg from '@ant-design/icons-svg/lib/asn/RotateRight1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRight1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRight1Bulk: RotateRight1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRight1BulkSvg}></AntdIcon>;
};

RotateRight1Bulk.displayName = 'RotateRight1Bulk';
RotateRight1Bulk.inheritAttrs = false;
export default RotateRight1Bulk;