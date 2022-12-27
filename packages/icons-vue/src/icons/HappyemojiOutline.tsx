// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HappyemojiOutlineSvg from '@ant-design/icons-svg/lib/asn/HappyemojiOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HappyemojiOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HappyemojiOutline: HappyemojiOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HappyemojiOutlineSvg}></AntdIcon>;
};

HappyemojiOutline.displayName = 'HappyemojiOutline';
HappyemojiOutline.inheritAttrs = false;
export default HappyemojiOutline;