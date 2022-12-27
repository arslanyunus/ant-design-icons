// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeDislikeBulkSvg from '@ant-design/icons-svg/lib/asn/LikeDislikeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeDislikeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeDislikeBulk: LikeDislikeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeDislikeBulkSvg}></AntdIcon>;
};

LikeDislikeBulk.displayName = 'LikeDislikeBulk';
LikeDislikeBulk.inheritAttrs = false;
export default LikeDislikeBulk;