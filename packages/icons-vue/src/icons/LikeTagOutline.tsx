// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeTagOutlineSvg from '@ant-design/icons-svg/lib/asn/LikeTagOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeTagOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeTagOutline: LikeTagOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeTagOutlineSvg}></AntdIcon>;
};

LikeTagOutline.displayName = 'LikeTagOutline';
LikeTagOutline.inheritAttrs = false;
export default LikeTagOutline;