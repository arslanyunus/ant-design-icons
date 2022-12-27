// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/OmegaSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaSquareBroken: OmegaSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaSquareBrokenSvg}></AntdIcon>;
};

OmegaSquareBroken.displayName = 'OmegaSquareBroken';
OmegaSquareBroken.inheritAttrs = false;
export default OmegaSquareBroken;