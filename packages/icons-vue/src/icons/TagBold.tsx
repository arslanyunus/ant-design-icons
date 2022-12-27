// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagBoldSvg from '@ant-design/icons-svg/lib/asn/TagBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagBold: TagBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagBoldSvg}></AntdIcon>;
};

TagBold.displayName = 'TagBold';
TagBold.inheritAttrs = false;
export default TagBold;