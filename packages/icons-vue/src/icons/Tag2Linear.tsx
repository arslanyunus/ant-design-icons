// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Tag2LinearSvg from '@ant-design/icons-svg/lib/asn/Tag2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Tag2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Tag2Linear: Tag2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Tag2LinearSvg}></AntdIcon>;
};

Tag2Linear.displayName = 'Tag2Linear';
Tag2Linear.inheritAttrs = false;
export default Tag2Linear;