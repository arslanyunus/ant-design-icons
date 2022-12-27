// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagRightTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagRightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagRightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagRightTwoTone: TagRightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagRightTwoToneSvg}></AntdIcon>;
};

TagRightTwoTone.displayName = 'TagRightTwoTone';
TagRightTwoTone.inheritAttrs = false;
export default TagRightTwoTone;