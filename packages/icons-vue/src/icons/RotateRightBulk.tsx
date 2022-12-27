// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRightBulkSvg from '@ant-design/icons-svg/lib/asn/RotateRightBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRightBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRightBulk: RotateRightBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRightBulkSvg}></AntdIcon>;
};

RotateRightBulk.displayName = 'RotateRightBulk';
RotateRightBulk.inheritAttrs = false;
export default RotateRightBulk;