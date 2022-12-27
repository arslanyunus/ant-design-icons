// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagRightBoldSvg from '@ant-design/icons-svg/lib/asn/TagRightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagRightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagRightBold: TagRightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagRightBoldSvg}></AntdIcon>;
};

TagRightBold.displayName = 'TagRightBold';
TagRightBold.inheritAttrs = false;
export default TagRightBold;