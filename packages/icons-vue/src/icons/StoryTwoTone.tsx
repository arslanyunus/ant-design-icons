// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StoryTwoToneSvg from '@ant-design/icons-svg/lib/asn/StoryTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StoryTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StoryTwoTone: StoryTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StoryTwoToneSvg}></AntdIcon>;
};

StoryTwoTone.displayName = 'StoryTwoTone';
StoryTwoTone.inheritAttrs = false;
export default StoryTwoTone;