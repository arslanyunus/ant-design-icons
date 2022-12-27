// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockBulkSvg from '@ant-design/icons-svg/lib/asn/LockBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockBulk: LockBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockBulkSvg}></AntdIcon>;
};

LockBulk.displayName = 'LockBulk';
LockBulk.inheritAttrs = false;
export default LockBulk;