// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Tag2BrokenSvg from '@ant-design/icons-svg/lib/asn/Tag2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Tag2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Tag2Broken: Tag2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Tag2BrokenSvg}></AntdIcon>;
};

Tag2Broken.displayName = 'Tag2Broken';
Tag2Broken.inheritAttrs = false;
export default Tag2Broken;