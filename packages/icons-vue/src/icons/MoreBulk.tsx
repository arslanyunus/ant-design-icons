// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreBulkSvg from '@ant-design/icons-svg/lib/asn/MoreBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreBulk: MoreBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreBulkSvg}></AntdIcon>;
};

MoreBulk.displayName = 'MoreBulk';
MoreBulk.inheritAttrs = false;
export default MoreBulk;