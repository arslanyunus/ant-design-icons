// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/OmegaCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaCircleBroken: OmegaCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaCircleBrokenSvg}></AntdIcon>;
};

OmegaCircleBroken.displayName = 'OmegaCircleBroken';
OmegaCircleBroken.inheritAttrs = false;
export default OmegaCircleBroken;