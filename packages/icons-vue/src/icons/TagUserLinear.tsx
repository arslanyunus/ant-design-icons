// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagUserLinearSvg from '@ant-design/icons-svg/lib/asn/TagUserLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagUserLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagUserLinear: TagUserLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagUserLinearSvg}></AntdIcon>;
};

TagUserLinear.displayName = 'TagUserLinear';
TagUserLinear.inheritAttrs = false;
export default TagUserLinear;