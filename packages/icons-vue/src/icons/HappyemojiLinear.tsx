// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HappyemojiLinearSvg from '@ant-design/icons-svg/lib/asn/HappyemojiLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HappyemojiLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HappyemojiLinear: HappyemojiLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HappyemojiLinearSvg}></AntdIcon>;
};

HappyemojiLinear.displayName = 'HappyemojiLinear';
HappyemojiLinear.inheritAttrs = false;
export default HappyemojiLinear;