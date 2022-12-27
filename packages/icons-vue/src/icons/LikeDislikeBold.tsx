// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeDislikeBoldSvg from '@ant-design/icons-svg/lib/asn/LikeDislikeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeDislikeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeDislikeBold: LikeDislikeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeDislikeBoldSvg}></AntdIcon>;
};

LikeDislikeBold.displayName = 'LikeDislikeBold';
LikeDislikeBold.inheritAttrs = false;
export default LikeDislikeBold;