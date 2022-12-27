// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MagicStarBulkSvg from '@ant-design/icons-svg/lib/asn/MagicStarBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MagicStarBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MagicStarBulk: MagicStarBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicStarBulkSvg}></AntdIcon>;
};

MagicStarBulk.displayName = 'MagicStarBulk';
MagicStarBulk.inheritAttrs = false;
export default MagicStarBulk;