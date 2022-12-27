// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LayerLinearSvg from '@ant-design/icons-svg/lib/asn/LayerLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LayerLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LayerLinear: LayerLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayerLinearSvg}></AntdIcon>;
};

LayerLinear.displayName = 'LayerLinear';
LayerLinear.inheritAttrs = false;
export default LayerLinear;