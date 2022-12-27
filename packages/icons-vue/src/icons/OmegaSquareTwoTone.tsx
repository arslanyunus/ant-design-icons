// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/OmegaSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaSquareTwoTone: OmegaSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaSquareTwoToneSvg}></AntdIcon>;
};

OmegaSquareTwoTone.displayName = 'OmegaSquareTwoTone';
OmegaSquareTwoTone.inheritAttrs = false;
export default OmegaSquareTwoTone;