// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaSquare1LinearSvg from '@ant-design/icons-svg/lib/asn/OmegaSquare1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaSquare1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaSquare1Linear: OmegaSquare1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaSquare1LinearSvg}></AntdIcon>;
};

OmegaSquare1Linear.displayName = 'OmegaSquare1Linear';
OmegaSquare1Linear.inheritAttrs = false;
export default OmegaSquare1Linear;