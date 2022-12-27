// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagRightLinearSvg from '@ant-design/icons-svg/lib/asn/TagRightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagRightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagRightLinear: TagRightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagRightLinearSvg}></AntdIcon>;
};

TagRightLinear.displayName = 'TagRightLinear';
TagRightLinear.inheritAttrs = false;
export default TagRightLinear;