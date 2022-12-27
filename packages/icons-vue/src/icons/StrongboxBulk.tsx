// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StrongboxBulkSvg from '@ant-design/icons-svg/lib/asn/StrongboxBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StrongboxBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StrongboxBulk: StrongboxBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StrongboxBulkSvg}></AntdIcon>;
};

StrongboxBulk.displayName = 'StrongboxBulk';
StrongboxBulk.inheritAttrs = false;
export default StrongboxBulk;