// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeBoldSvg from '@ant-design/icons-svg/lib/asn/LikeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeBold: LikeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeBoldSvg}></AntdIcon>;
};

LikeBold.displayName = 'LikeBold';
LikeBold.inheritAttrs = false;
export default LikeBold;