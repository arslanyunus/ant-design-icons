// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaSquareBoldSvg from '@ant-design/icons-svg/lib/asn/OmegaSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaSquareBold: OmegaSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaSquareBoldSvg}></AntdIcon>;
};

OmegaSquareBold.displayName = 'OmegaSquareBold';
OmegaSquareBold.inheritAttrs = false;
export default OmegaSquareBold;