// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/OmegaCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaCircleOutline: OmegaCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaCircleOutlineSvg}></AntdIcon>;
};

OmegaCircleOutline.displayName = 'OmegaCircleOutline';
OmegaCircleOutline.inheritAttrs = false;
export default OmegaCircleOutline;