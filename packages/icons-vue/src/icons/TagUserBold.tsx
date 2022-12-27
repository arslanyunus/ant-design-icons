// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagUserBoldSvg from '@ant-design/icons-svg/lib/asn/TagUserBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagUserBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagUserBold: TagUserBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagUserBoldSvg}></AntdIcon>;
};

TagUserBold.displayName = 'TagUserBold';
TagUserBold.inheritAttrs = false;
export default TagUserBold;