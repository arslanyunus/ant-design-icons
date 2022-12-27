// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Tag2OutlineSvg from '@ant-design/icons-svg/lib/asn/Tag2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Tag2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Tag2Outline: Tag2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Tag2OutlineSvg}></AntdIcon>;
};

Tag2Outline.displayName = 'Tag2Outline';
Tag2Outline.inheritAttrs = false;
export default Tag2Outline;