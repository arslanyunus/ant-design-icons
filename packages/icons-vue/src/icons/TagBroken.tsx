// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagBrokenSvg from '@ant-design/icons-svg/lib/asn/TagBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagBroken: TagBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagBrokenSvg}></AntdIcon>;
};

TagBroken.displayName = 'TagBroken';
TagBroken.inheritAttrs = false;
export default TagBroken;