// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectUpLinearSvg from '@ant-design/icons-svg/lib/asn/DirectUpLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectUpLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectUpLinear: DirectUpLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectUpLinearSvg}></AntdIcon>;
};

DirectUpLinear.displayName = 'DirectUpLinear';
DirectUpLinear.inheritAttrs = false;
export default DirectUpLinear;