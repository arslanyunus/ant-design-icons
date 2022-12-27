// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagCrossBoldSvg from '@ant-design/icons-svg/lib/asn/TagCrossBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagCrossBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagCrossBold: TagCrossBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagCrossBoldSvg}></AntdIcon>;
};

TagCrossBold.displayName = 'TagCrossBold';
TagCrossBold.inheritAttrs = false;
export default TagCrossBold;