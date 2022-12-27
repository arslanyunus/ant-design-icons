// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagUserBrokenSvg from '@ant-design/icons-svg/lib/asn/TagUserBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagUserBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagUserBroken: TagUserBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagUserBrokenSvg}></AntdIcon>;
};

TagUserBroken.displayName = 'TagUserBroken';
TagUserBroken.inheritAttrs = false;
export default TagUserBroken;