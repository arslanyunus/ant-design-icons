// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaCircleBoldSvg from '@ant-design/icons-svg/lib/asn/OmegaCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaCircleBold: OmegaCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaCircleBoldSvg}></AntdIcon>;
};

OmegaCircleBold.displayName = 'OmegaCircleBold';
OmegaCircleBold.inheritAttrs = false;
export default OmegaCircleBold;