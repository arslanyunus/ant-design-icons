// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MagicpenBulkSvg from '@ant-design/icons-svg/lib/asn/MagicpenBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MagicpenBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MagicpenBulk: MagicpenBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicpenBulkSvg}></AntdIcon>;
};

MagicpenBulk.displayName = 'MagicpenBulk';
MagicpenBulk.inheritAttrs = false;
export default MagicpenBulk;