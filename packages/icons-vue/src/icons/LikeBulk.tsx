// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeBulkSvg from '@ant-design/icons-svg/lib/asn/LikeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeBulk: LikeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeBulkSvg}></AntdIcon>;
};

LikeBulk.displayName = 'LikeBulk';
LikeBulk.inheritAttrs = false;
export default LikeBulk;