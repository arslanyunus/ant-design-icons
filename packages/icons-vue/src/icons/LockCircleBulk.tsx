// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockCircleBulkSvg from '@ant-design/icons-svg/lib/asn/LockCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockCircleBulk: LockCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockCircleBulkSvg}></AntdIcon>;
};

LockCircleBulk.displayName = 'LockCircleBulk';
LockCircleBulk.inheritAttrs = false;
export default LockCircleBulk;