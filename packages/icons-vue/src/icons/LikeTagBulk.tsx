// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeTagBulkSvg from '@ant-design/icons-svg/lib/asn/LikeTagBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeTagBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeTagBulk: LikeTagBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeTagBulkSvg}></AntdIcon>;
};

LikeTagBulk.displayName = 'LikeTagBulk';
LikeTagBulk.inheritAttrs = false;
export default LikeTagBulk;