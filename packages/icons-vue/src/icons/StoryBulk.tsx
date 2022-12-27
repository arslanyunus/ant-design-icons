// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StoryBulkSvg from '@ant-design/icons-svg/lib/asn/StoryBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StoryBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StoryBulk: StoryBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StoryBulkSvg}></AntdIcon>;
};

StoryBulk.displayName = 'StoryBulk';
StoryBulk.inheritAttrs = false;
export default StoryBulk;