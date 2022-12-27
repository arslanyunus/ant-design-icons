// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagUserTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagUserTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagUserTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagUserTwoTone: TagUserTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagUserTwoToneSvg}></AntdIcon>;
};

TagUserTwoTone.displayName = 'TagUserTwoTone';
TagUserTwoTone.inheritAttrs = false;
export default TagUserTwoTone;