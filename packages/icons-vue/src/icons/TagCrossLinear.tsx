// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagCrossLinearSvg from '@ant-design/icons-svg/lib/asn/TagCrossLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagCrossLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagCrossLinear: TagCrossLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagCrossLinearSvg}></AntdIcon>;
};

TagCrossLinear.displayName = 'TagCrossLinear';
TagCrossLinear.inheritAttrs = false;
export default TagCrossLinear;