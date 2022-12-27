// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StoryLinearSvg from '@ant-design/icons-svg/lib/asn/StoryLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StoryLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StoryLinear: StoryLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StoryLinearSvg}></AntdIcon>;
};

StoryLinear.displayName = 'StoryLinear';
StoryLinear.inheritAttrs = false;
export default StoryLinear;