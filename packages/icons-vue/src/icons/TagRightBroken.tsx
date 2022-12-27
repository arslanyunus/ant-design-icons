// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagRightBrokenSvg from '@ant-design/icons-svg/lib/asn/TagRightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagRightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagRightBroken: TagRightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagRightBrokenSvg}></AntdIcon>;
};

TagRightBroken.displayName = 'TagRightBroken';
TagRightBroken.inheritAttrs = false;
export default TagRightBroken;