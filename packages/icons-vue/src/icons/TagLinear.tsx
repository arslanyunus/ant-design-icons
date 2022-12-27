// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagLinearSvg from '@ant-design/icons-svg/lib/asn/TagLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagLinear: TagLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagLinearSvg}></AntdIcon>;
};

TagLinear.displayName = 'TagLinear';
TagLinear.inheritAttrs = false;
export default TagLinear;