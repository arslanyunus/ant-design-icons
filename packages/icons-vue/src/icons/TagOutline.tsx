// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagOutlineSvg from '@ant-design/icons-svg/lib/asn/TagOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagOutline: TagOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagOutlineSvg}></AntdIcon>;
};

TagOutline.displayName = 'TagOutline';
TagOutline.inheritAttrs = false;
export default TagOutline;