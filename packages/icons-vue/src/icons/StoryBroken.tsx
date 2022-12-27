// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StoryBrokenSvg from '@ant-design/icons-svg/lib/asn/StoryBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StoryBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StoryBroken: StoryBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StoryBrokenSvg}></AntdIcon>;
};

StoryBroken.displayName = 'StoryBroken';
StoryBroken.inheritAttrs = false;
export default StoryBroken;