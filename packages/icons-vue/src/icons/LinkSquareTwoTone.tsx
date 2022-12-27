// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/LinkSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkSquareTwoTone: LinkSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkSquareTwoToneSvg}></AntdIcon>;
};

LinkSquareTwoTone.displayName = 'LinkSquareTwoTone';
LinkSquareTwoTone.inheritAttrs = false;
export default LinkSquareTwoTone;