// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaCircle1LinearSvg from '@ant-design/icons-svg/lib/asn/OmegaCircle1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaCircle1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaCircle1Linear: OmegaCircle1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaCircle1LinearSvg}></AntdIcon>;
};

OmegaCircle1Linear.displayName = 'OmegaCircle1Linear';
OmegaCircle1Linear.inheritAttrs = false;
export default OmegaCircle1Linear;