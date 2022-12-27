// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/LinkCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkCircleTwoTone: LinkCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkCircleTwoToneSvg}></AntdIcon>;
};

LinkCircleTwoTone.displayName = 'LinkCircleTwoTone';
LinkCircleTwoTone.inheritAttrs = false;
export default LinkCircleTwoTone;