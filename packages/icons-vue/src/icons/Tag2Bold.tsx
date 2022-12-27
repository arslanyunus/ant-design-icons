// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Tag2BoldSvg from '@ant-design/icons-svg/lib/asn/Tag2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Tag2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Tag2Bold: Tag2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Tag2BoldSvg}></AntdIcon>;
};

Tag2Bold.displayName = 'Tag2Bold';
Tag2Bold.inheritAttrs = false;
export default Tag2Bold;