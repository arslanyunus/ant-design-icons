// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/OmegaSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaSquareOutline: OmegaSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaSquareOutlineSvg}></AntdIcon>;
};

OmegaSquareOutline.displayName = 'OmegaSquareOutline';
OmegaSquareOutline.inheritAttrs = false;
export default OmegaSquareOutline;