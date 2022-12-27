// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Tag2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Tag2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Tag2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Tag2TwoTone: Tag2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Tag2TwoToneSvg}></AntdIcon>;
};

Tag2TwoTone.displayName = 'Tag2TwoTone';
Tag2TwoTone.inheritAttrs = false;
export default Tag2TwoTone;