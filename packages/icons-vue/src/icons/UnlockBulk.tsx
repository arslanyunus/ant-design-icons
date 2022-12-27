// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlockBulkSvg from '@ant-design/icons-svg/lib/asn/UnlockBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlockBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlockBulk: UnlockBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlockBulkSvg}></AntdIcon>;
};

UnlockBulk.displayName = 'UnlockBulk';
UnlockBulk.inheritAttrs = false;
export default UnlockBulk;