// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/OmegaCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaCircleTwoTone: OmegaCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaCircleTwoToneSvg}></AntdIcon>;
};

OmegaCircleTwoTone.displayName = 'OmegaCircleTwoTone';
OmegaCircleTwoTone.inheritAttrs = false;
export default OmegaCircleTwoTone;