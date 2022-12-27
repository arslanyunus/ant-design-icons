// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeTagBoldSvg from '@ant-design/icons-svg/lib/asn/LikeTagBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeTagBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeTagBold: LikeTagBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeTagBoldSvg}></AntdIcon>;
};

LikeTagBold.displayName = 'LikeTagBold';
LikeTagBold.inheritAttrs = false;
export default LikeTagBold;