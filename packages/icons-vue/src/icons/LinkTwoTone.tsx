// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkTwoToneSvg from '@ant-design/icons-svg/lib/asn/LinkTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkTwoTone: LinkTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkTwoToneSvg}></AntdIcon>;
};

LinkTwoTone.displayName = 'LinkTwoTone';
LinkTwoTone.inheritAttrs = false;
export default LinkTwoTone;