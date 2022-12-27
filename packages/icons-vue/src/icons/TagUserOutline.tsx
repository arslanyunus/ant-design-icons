// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagUserOutlineSvg from '@ant-design/icons-svg/lib/asn/TagUserOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagUserOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagUserOutline: TagUserOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagUserOutlineSvg}></AntdIcon>;
};

TagUserOutline.displayName = 'TagUserOutline';
TagUserOutline.inheritAttrs = false;
export default TagUserOutline;