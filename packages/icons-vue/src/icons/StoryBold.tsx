// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StoryBoldSvg from '@ant-design/icons-svg/lib/asn/StoryBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StoryBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StoryBold: StoryBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StoryBoldSvg}></AntdIcon>;
};

StoryBold.displayName = 'StoryBold';
StoryBold.inheritAttrs = false;
export default StoryBold;