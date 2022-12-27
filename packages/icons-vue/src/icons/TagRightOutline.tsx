// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagRightOutlineSvg from '@ant-design/icons-svg/lib/asn/TagRightOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagRightOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagRightOutline: TagRightOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagRightOutlineSvg}></AntdIcon>;
};

TagRightOutline.displayName = 'TagRightOutline';
TagRightOutline.inheritAttrs = false;
export default TagRightOutline;