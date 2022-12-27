// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagCrossOutlineSvg from '@ant-design/icons-svg/lib/asn/TagCrossOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagCrossOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagCrossOutline: TagCrossOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagCrossOutlineSvg}></AntdIcon>;
};

TagCrossOutline.displayName = 'TagCrossOutline';
TagCrossOutline.inheritAttrs = false;
export default TagCrossOutline;