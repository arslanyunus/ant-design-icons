// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagCrossTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagCrossTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagCrossTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagCrossTwoTone: TagCrossTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagCrossTwoToneSvg}></AntdIcon>;
};

TagCrossTwoTone.displayName = 'TagCrossTwoTone';
TagCrossTwoTone.inheritAttrs = false;
export default TagCrossTwoTone;