// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StoryOutlineSvg from '@ant-design/icons-svg/lib/asn/StoryOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StoryOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StoryOutline: StoryOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StoryOutlineSvg}></AntdIcon>;
};

StoryOutline.displayName = 'StoryOutline';
StoryOutline.inheritAttrs = false;
export default StoryOutline;