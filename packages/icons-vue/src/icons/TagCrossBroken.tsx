// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagCrossBrokenSvg from '@ant-design/icons-svg/lib/asn/TagCrossBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagCrossBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagCrossBroken: TagCrossBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagCrossBrokenSvg}></AntdIcon>;
};

TagCrossBroken.displayName = 'TagCrossBroken';
TagCrossBroken.inheritAttrs = false;
export default TagCrossBroken;